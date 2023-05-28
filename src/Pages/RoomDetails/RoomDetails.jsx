import React from 'react';
import Container from '../../components/Shared/Container';
import Header from '../../components/Rooms/Header';

const RoomDetails = () => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className='flex flex-col gap-6'>
                    <Header/>
                    <div>Room Info</div>
                    <div>Reservation</div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;