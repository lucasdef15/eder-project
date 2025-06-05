import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className='p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 550, maxWidth: 750, width: '100%' }}
        className='react-big-calendar text-gray-700'
        messages={{
          next: 'Próximo',
          previous: 'Anterior',
          today: 'Hoje',
          month: 'Mês',
          agenda: 'Agenda',
          date: 'Data',
          time: 'Hora',
          event: 'Evento',
          noEventsInRange: 'Não há eventos neste período.',
        }}
        culture='pt-BR'
        // views={['month', 'agenda']}
        view={view}
        onView={handleViewChange}
        date={date}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default MyCalendar;
