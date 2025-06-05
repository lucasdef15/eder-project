import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contato = () => {
  return (
    <section className='bg-gray-100 px-5'>
      <div className='max-w-5xl mx-auto text-center py-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-2'>Onde Estamos</h2>
        <p className='text-gray-600'>
          Venha nos visitar! Estamos localizados em um ponto de fácil acesso.
        </p>
      </div>

      <div className='h-[50vh] shadow-lg rounded-xl overflow-hidden border border-gray-300'>
        <iframe
          className='w-full h-full'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.758608752717!2d-47.821191125051854!3d-21.201746179167145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bec604e3cd0d%3A0x4cc985267762b06e!2sAv.%20Independ%C3%AAncia%2C%203146%20-%20Alto%20da%20Boa%20Vista%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-230!5e0!3m2!1spt-BR!2sbr!4v1744734717020!5m2!1spt-BR!2sbr'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Mapa - Localização'
        ></iframe>
      </div>

      <section className='flex flex-col bg-emerald-100 w-full max-w-xl mx-auto relative -top-12 p-5 rounded-lg shadow-xl'>
        <div className='p-5 w-full'>
          <div className='flex flex-col gap-3'>
            <h2 className='font-medium'>POR QUE ESCOLHER-NOS?</h2>
            <h1 className='font-medium text-2xl md:text-3xl'>
              Consulta Gratuita – Comece Sua Jornada de Cura
            </h1>
            <p className='text-sm'>
              Conecte-se com um especialista dedicado hoje e dê o primeiro passo
              rumo a uma vida mais saudável e plena.
            </p>
          </div>

          <div className='border-b p-5 mb-5 border-b-black/10 w-full'></div>

          <div className='flex flex-col gap-4 text-emerald-900 items-center md:items-start'>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt className='text-teal-600' />
              <span>(11) 99999-9999</span>
            </div>
            <div className='flex items-center gap-3'>
              <FaEnvelope className='text-teal-600' />
              <span>contato@mindfulness.com.br</span>
            </div>
            <div className='flex items-center gap-3'>
              <FaMapMarkerAlt className='text-teal-600' />
              <span>Rua do Equilíbrio, 123 - São Paulo, SP</span>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Agende sua Consulta</CardTitle>
              <CardDescription>
                Preencha seus dados para que possamos entrar em contato.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form>
                <div className='grid w-full items-center gap-4'>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='nome'>Nome Completo</Label>
                    <Input id='nome' placeholder='Seu nome completo' />
                  </div>

                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='email'>E-mail</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='seuemail@exemplo.com'
                    />
                  </div>

                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='telefone'>Telefone</Label>
                    <Input
                      id='telefone'
                      type='tel'
                      placeholder='(99) 99999-9999'
                    />
                  </div>

                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='assunto'>Motivo do Contato</Label>
                    <Select>
                      <SelectTrigger id='assunto'>
                        <SelectValue placeholder='Selecione' />
                      </SelectTrigger>
                      <SelectContent position='popper'>
                        <SelectItem value='consulta'>
                          Agendar Consulta
                        </SelectItem>
                        <SelectItem value='duvida'>Dúvidas Gerais</SelectItem>
                        <SelectItem value='outro'>Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>

            <CardFooter className='flex flex-col sm:flex-row gap-2 justify-between'>
              <Button variant='outline' className='w-full sm:w-auto'>
                Cancelar
              </Button>
              <Button className='w-full sm:w-auto'>Enviar</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </section>
  );
};

export default Contato;
