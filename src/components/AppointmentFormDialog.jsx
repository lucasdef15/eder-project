import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import moment from 'moment';

const AppointmentFormDialog = ({ onSubmit, userName }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState(userName || '');
  const [subject, setSubject] = useState('Consulta Psicológica');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date && time && name && subject && !isSubmitting) {
      setIsSubmitting(true);
      const appointmentDate = moment(
        `${date} ${time}`,
        'YYYY-MM-DD HH:mm'
      ).toDate();

      if (moment(appointmentDate).isBefore(moment())) {
        alert(
          'Não é possível agendar consultas em datas ou horários passados.'
        );
        setIsSubmitting(false);
        return;
      }

      try {
        await onSubmit({ appointmentDate, name, subject });
        setDate('');
        setTime('');
        alert('Consulta agendada com sucesso!');
        setOpen(false); // Fecha o dialog ao agendar com sucesso
      } catch (error) {
        // Tratamento de erro feito no componente pai
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-emerald-600 hover:bg-emerald-700'>
          Agendar Nova Consulta
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Agendar Nova Consulta</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
          <div>
            <label
              htmlFor='appointment-name'
              className='block text-sm font-medium mb-1'
            >
              Nome:
            </label>
            <input
              id='appointment-name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500'
              required
            />
          </div>

          <div>
            <label
              htmlFor='appointment-subject'
              className='block text-sm font-medium mb-1'
            >
              Assunto:
            </label>
            <select
              id='appointment-subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className='w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white'
            >
              <option>Consulta Psicológica</option>
              <option>Acompanhamento Terapêutico</option>
              <option>Orientação Profissional</option>
              <option>Outro</option>
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='appointment-date'
                className='block text-sm font-medium mb-1'
              >
                Data:
              </label>
              <input
                id='appointment-date'
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500'
                required
                min={moment().format('YYYY-MM-DD')}
              />
            </div>
            <div>
              <label
                htmlFor='appointment-time'
                className='block text-sm font-medium mb-1'
              >
                Hora:
              </label>
              <input
                id='appointment-time'
                type='time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className='w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500'
                required
                step='1800'
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type='submit'
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Agendando...' : 'Agendar Consulta'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentFormDialog;
