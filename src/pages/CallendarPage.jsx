import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyCalendar from '@/components/Mycalendar';
import AppointmentFormDialog from '@/components/AppointmentFormDialog';

// --- Helper Functions for API Calls ---

const fetchGoogleCalendarEvents = async (accessToken) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          timeMin: moment().subtract(1, 'months').toISOString(), // Fetch events from last month
          timeMax: moment().add(3, 'months').toISOString(), // Fetch events up to 3 months ahead
          singleEvents: true,
          orderBy: 'startTime',
        },
      }
    );
    return response.data.items.map((item) => ({
      id: item.id, // Keep event ID for potential updates/deletions
      start: new Date(item.start.dateTime || item.start.date),
      end: new Date(item.end.dateTime || item.end.date),
      title: item.summary,
    }));
  } catch (error) {
    console.error('Erro ao buscar eventos:', error.response?.data || error);
    if (error.response?.status === 401) {
      // Unauthorized, likely expired token
      throw new Error('Unauthorized');
    }
    throw new Error('Falha ao buscar eventos do Google Calendar.');
  }
};

const createGoogleCalendarEvent = async (accessToken, eventData) => {
  const event = {
    summary: `${eventData.subject} - ${eventData.name}`,
    start: {
      dateTime: eventData.appointmentDate.toISOString(),
      timeZone: 'America/Sao_Paulo', // Consider making this dynamic or configurable
    },
    end: {
      dateTime: new Date(
        eventData.appointmentDate.getTime() + 60 * 60 * 1000 // Default 1 hour duration
      ).toISOString(),
      timeZone: 'America/Sao_Paulo',
    },
    // Optional: Add description, attendees, etc.
    // description: `Consulta agendada para ${eventData.name}. Assunto: ${eventData.subject}`,
  };

  try {
    const response = await axios.post(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      event,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    // Return the newly created event details in the desired format
    return {
      id: response.data.id,
      start: new Date(response.data.start.dateTime),
      end: new Date(response.data.end.dateTime),
      title: response.data.summary,
    };
  } catch (error) {
    console.error('Erro ao criar evento:', error.response?.data || error);
    if (error.response?.status === 401) {
      throw new Error('Unauthorized');
    }
    throw new Error('Falha ao criar evento no Google Calendar.');
  }
};

// --- Components ---

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [error, setError] = useState(null);
  const { user, accessToken, logout, isLoading: isLoadingAuth } = useAuth();
  const navigate = useNavigate();

  // --- Effects ---

  // Redirect to login if not authenticated or still loading auth state
  useEffect(() => {
    if (!isLoadingAuth && !accessToken) {
      navigate('/login');
    }
  }, [accessToken, isLoadingAuth, navigate]);

  // Fetch events when authenticated
  const loadEvents = useCallback(async () => {
    if (accessToken) {
      setIsLoadingEvents(true);
      setError(null);
      try {
        const fetchedEvents = await fetchGoogleCalendarEvents(accessToken);
        setEvents(fetchedEvents);
      } catch (err) {
        console.error('Error in loadEvents:', err);
        if (err.message === 'Unauthorized') {
          alert('Sua sessão expirou. Por favor, faça login novamente.');
          logout(); // Clear auth state
          navigate('/login');
        } else {
          setError(err.message || 'Erro ao carregar eventos.');
          // Optionally show an alert here too
          alert('Ocorreu um erro ao carregar seus eventos do calendário.');
        }
      } finally {
        setIsLoadingEvents(false);
      }
    }
  }, [accessToken, navigate, logout]);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]); // Depend on the memoized loadEvents function

  // --- Event Handlers ---

  const handleCreateEvent = async (eventData) => {
    if (!accessToken) {
      navigate('/login');
      return; // Exit if no token
    }

    setError(null); // Clear previous errors

    try {
      const newEvent = await createGoogleCalendarEvent(accessToken, eventData);
      setEvents((prev) => [...prev, newEvent]);
      // Success alert is handled within AppointmentForm
    } catch (err) {
      console.error('Error in handleCreateEvent:', err);
      if (err.message === 'Unauthorized') {
        alert('Sua sessão expirou. Por favor, faça login novamente.');
        logout();
        navigate('/login');
      } else {
        setError(err.message || 'Erro ao criar evento.');
        alert(`Erro ao agendar consulta: ${err.message}`);
      }
      // Re-throw the error so the form knows submission failed
      throw err;
    }
  };

  // --- Render Logic ---

  if (isLoadingAuth || !user) {
    // Show a loading indicator or null while auth state is resolving
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Carregando...</p>
      </div>
    ); // Or a spinner component
  }

  return (
    <div className='container mx-auto max-w-4xl p-4 md:p-8 mt-25 md-mt-0'>
      <header className='mb-8 flex flex-col md-flex-row gap-10 justify-between items-center  text-center'>
        <div>
          <h1 className='text-3xl font-bold text-emerald-800'>
            Agenda de Consultas
          </h1>
          <p className='text-gray-600 mt-1'>
            Visualize e gerencie seus agendamentos.
          </p>
          {/* Optional: Add a logout button */}
          {/* <button
          onClick={logout}
          className='text-sm text-red-600 hover:underline mt-2'
        >
          Sair
        </button> */}
        </div>

        <div className='lg:col-span-1'>
          <AppointmentFormDialog
            onSubmit={handleCreateEvent}
            userName={user?.name || ''}
          />
        </div>
      </header>

      {error && (
        <div
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'
          role='alert'
        >
          <strong className='font-bold'>Erro:</strong>
          <span className='block sm:inline'> {error}</span>
        </div>
      )}

      <div className=''>
        <div className='lg:col-span-2'>
          {isLoadingEvents ? (
            <div className='flex justify-center items-center h-[550px] bg-white rounded-lg shadow-md'>
              <p>Carregando calendário...</p>
            </div>
          ) : (
            <MyCalendar events={events} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
