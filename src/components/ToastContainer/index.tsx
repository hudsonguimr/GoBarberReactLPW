import React from 'react';
import { FiAlertCircle, FiXCircle} from 'react-icons/fi';
import {ToastMessage, useToast} from '../../hooks/ToastContext';
import {Container} from './style';

import Toast from './Toast';

interface ToastContainerProps{
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> =({messages}) =>(
 <Container>
    {messages.map((message) =>
    <Toast key ={message.id} message ={message}/>

    )}
  </Container>

);


export default ToastContainer;
