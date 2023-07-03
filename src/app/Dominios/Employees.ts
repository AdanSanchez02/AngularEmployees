import { Genders } from "./Genders";
import { Jobs } from "./Jobs";


export class Employees {
    // Agregar Variables igual como en springboot
    id: number;
    genders: Genders;
    jobs: Jobs;
    name: String;
    last_name: String;
    birthdate: Date;
}