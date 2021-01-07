class vehicle {
    private var number;
    private var inTime;
    private var outTime;
    private var model;
    private var spaceEntry;

    public function vehicle(number, inTime,outTime,model,spaceEntry) {
        this.number=number;
        this.inTime=inTime;
        this.outTime=outTime;
        this.model=model;
        this.spaceEntry=spaceEntry;
    }
}
const Audi=new Vehicle(8305,12:00,13:00,'swift vdi',"4");
console.log("Audi");
