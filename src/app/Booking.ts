export class Booking{
    constructor(
        public booking_id: number,
        public hotel_name: string,
        public price: number,
        public no_of_rooms: number,
        public checkin_date: Date,
        public checkout_date: Date,
        public total_price: number
    ){}
}