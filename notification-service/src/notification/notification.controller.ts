import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  @MessagePattern('order.created')
  handleOrderCreated(@Payload() message: any) {
    const payload = message && typeof message === 'object' && 'value' in message ? message.value : message;
    const order = typeof payload === 'string' ? JSON.parse(payload) : payload;
    const ts = new Date().toISOString();
    console.log(`[${ts}] ✅ Confirmation envoyée à ${order.customerEmail} pour la commande #${order.id}`);
  }
}
