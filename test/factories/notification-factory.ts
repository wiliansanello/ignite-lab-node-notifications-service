import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('You received a notification'),
    category: 'social',
    recipientId: 'recipient-2',
    ...override,
  });
}
