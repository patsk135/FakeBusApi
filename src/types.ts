export interface QuerySeatAvailabilitySchema {
  departure: string;
  destination: string;
  dateTime: Date;
}

export interface ReservedTicketSchema {
  departure: string;
  destination: string;
  dateTime: Date;
  seats: Number;
}
