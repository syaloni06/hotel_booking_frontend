export class Hotel{
    constructor(
        public id: number,
        public hotel_name: string,
        public location: string,
        public contact_no: string,
        public total_no_of_rooms: number,
        public price: number
    ){}
}