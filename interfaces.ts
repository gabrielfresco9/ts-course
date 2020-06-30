interface Vehicle {
    name: string;
    year: number;
    broken: boolean;

    summary(): string;
}

const oldCivic: Vehicle = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary(): string {
        return 'Im great';
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary())
}

printVehicle(oldCivic);