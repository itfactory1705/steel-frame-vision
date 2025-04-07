
import React from 'react';
import { Mail, Phone, MapPin, Clock, Check, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов' }),
  email: z.string().email({ message: 'Введите корректный email адрес' }),
  subject: z.string().min(5, { message: 'Тема должна содержать не менее 5 символов' }),
  message: z.string().min(10, { message: 'Сообщение должно содержать не менее 10 символов' })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    // Show success toast
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      duration: 5000,
    });
    
    // Reset form
    form.reset();
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle mx-auto">
            Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-steel-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-steel-800">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <Phone className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Телефон</h4>
                    <p className="text-steel-600">+7 (800) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <Mail className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Email</h4>
                    <p className="text-steel-600">info@steelframe.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <MapPin className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Адрес</h4>
                    <p className="text-steel-600">г. Москва, ул. Строителей, 10, офис 505</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <Clock className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Часы работы</h4>
                    <p className="text-steel-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-steel-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-steel-800">Отправить сообщение</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-steel-700">Имя</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ваше имя" 
                            {...field} 
                            className="bg-white border border-steel-200 focus:ring-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-steel-700">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ваш email" 
                            type="email" 
                            {...field} 
                            className="bg-white border border-steel-200 focus:ring-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-steel-700">Тема</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Тема сообщения" 
                          {...field} 
                          className="bg-white border border-steel-200 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-steel-700">Сообщение</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ваше сообщение" 
                          className="bg-white border border-steel-200 focus:ring-primary min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <button
                  type="submit"
                  className="btn-accent w-full sm:w-auto"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
