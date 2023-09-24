import { Carousel } from 'primereact/carousel';

import { Card } from './Card'

export const Dashboard = ({ children }) => {
    return (
        <div className="row bg-dark text-white">
            {children}
        </div>
    );
  }