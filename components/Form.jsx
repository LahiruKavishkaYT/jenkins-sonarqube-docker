'use client';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'> {/* Corrected className 'flex flex=col' to 'flex flex-col' */}
        {/* Name input */}
        <div className='relative flex items-center'>
            <Input type='text' id='nameInput' placeholder='Your Name' /> {/* Changed type from 'name' to 'text' and updated id */}
            <User className='absolute right-6' size={20} />
        </div>
        {/* Email input */}
        <div className='relative flex items-center'>
            <Input type='email' id='emailInput' placeholder='Your Email' /> {/* Updated id */}
            <MailIcon className='absolute right-6' size={20} />
        </div>
        {/* Message text area */}
        <div className='relative flex items-center'>
            <Textarea id='messageInput' placeholder='Type Your Message Here.' /> {/* Removed type attribute as it's not valid for <textarea>, updated id and placeholder */}
            <MessageSquare className='absolute top-4 right-6' size={20} /> {/* Changed icon for differentiation */}
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>
            Let's Talk
            <ArrowRightIcon size={20} />
        </Button>
    </form>
  );
};

export default Form;
