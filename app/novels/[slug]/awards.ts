import { StaticImageData } from 'next/image';
import badge1 from 'assets/icons/badge-1.png';
// import badge2 from 'assets/icons/badge-2.png';
import badge3 from 'assets/icons/badge-3.png';
import badge4 from 'assets/icons/badge-4.png';
// import badge5 from 'assets/icons/badge-5.png';
import badge6 from 'assets/icons/badge-6.png';
// import badge7 from 'assets/icons/badge-7.png';
// import badge8 from 'assets/icons/badge-8.png';
// import badge9 from 'assets/icons/badge-9.png';
// import badge10 from 'assets/icons/badge-10.png';
// import badge11 from 'assets/icons/badge-11.png';
import badge12 from 'assets/icons/badge-12.png';
import badge13 from 'assets/icons/badge-13.png';
// import badge14 from 'assets/icons/badge-14.png';
// import badge15 from 'assets/icons/badge-15.png';
// import badge16 from 'assets/icons/badge-16.png';

export interface Badge {
    icon: StaticImageData;
    title: string;
}

const badges: Badge[] = [
    { icon: badge3, title: `${process.env.NEXT_PUBLIC_APP_NAME} exclusive author` },
    { icon: badge6, title: 'Author of the month' },
    { icon: badge4, title: 'Ranked #1 in Hall of Fame' },
    { icon: badge1, title: 'Earned 25,000 points' },
    { icon: badge12, title: 'Earned 100,000 points' },
    { icon: badge13, title: 'Earned 1,00,000 points' },
];

export default badges;
