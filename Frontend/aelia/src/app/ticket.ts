export interface Ticket {
  id: Number;
  title: String;
  project: String;
  description?(flag: any): String;
}
