interface Item {
    label: string;
    url: string;
    badge?: string;
}

const items: Item[] = [
    { label: 'Notifications', url: '/notifications', badge: 'NEW' },
    { label: 'Messages', url: '/messages', badge: 'NEW' },
    { label: 'Rewards', url: '/rewards' },
    { label: 'Earnings', url: '/earnings' },
];

export default items;
