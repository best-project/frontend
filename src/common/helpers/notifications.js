import { notification } from 'antd';

export const notificationType = {
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Error: 'error',
};

export const notificationText = {
    Success: 'Success',
    Info: 'Please ensure the data you have entered is correct',
    Warning: 'Something went wrong',
    Error: 'Please update the data you have entered',
};

export const showNotification = ({ message, description, type = notificationType.Error }) => {
    notification[type]({
        message,
        description,
        duration: 3,
    });
};
