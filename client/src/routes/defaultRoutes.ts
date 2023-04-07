import { UsersPage } from 'pages/UsersPage';
import { ExamCardsPage } from 'pages/ExamCardsPage';

export const defaultRoutes = {
    users: {
        path: '/users',
        title: 'Пользователи',
        component: UsersPage(),
    },
    examCards: {
        path: '/exam-cards',
        title: 'Карточки экзаменов',
        component: ExamCardsPage(),
    },
};
