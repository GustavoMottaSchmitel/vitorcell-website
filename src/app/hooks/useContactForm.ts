import { useState } from 'react';
import { FormStatus, ContactFormData } from '@/app/types/contact';
import { COMPANY_INFO } from '@/app/data/contactData';

export const useContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const formDataObj: ContactFormData = {
      name: formData.get('name') as string || 'Cliente Desconhecido',
      phone: formData.get('phone') as string,
      model: formData.get('model') as string || 'Não Informado',
      problem: formData.get('problem') as string || 'Não Especificado'
    };

    setStatus('loading');

    setTimeout(() => {
      sendToWhatsApp(formDataObj);
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 2000);
    }, 1500);
  };

  const sendToWhatsApp = (data: ContactFormData) => {
    const message = `Olá, gostaria de um orçamento rápido para o meu aparelho.
    
📱 Modelo: ${data.model}
🔧 Problema: ${data.problem}
👤 Meu nome é: ${data.name}
📞 Telefone: ${data.phone}`;

    window.open(
      `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`, 
      '_blank'
    );
  };

  return {
    status,
    handleSubmit
  };
};