export interface Stop {
  id: string;
  name: string;
}

export interface SearchCriteria {
  from: Stop | null;
  to: Stop | null;
  departure: Date;
}

export interface Journey {
  type: string
  legs: Leg[]
  refreshToken: string
  price: Price
}

export interface Leg {
  origin: Origin
  destination: Destination
  departure: string
  plannedDeparture: string
  departureDelay: any
  arrival: string
  plannedArrival: string
  arrivalDelay: any
  reachable?: boolean
  tripId?: string
  line?: Line
  direction?: string
  arrivalPlatform?: string
  plannedArrivalPlatform?: string
  arrivalPrognosisType?: string
  departurePlatform?: string
  plannedDeparturePlatform?: string
  departurePrognosisType?: string
  loadFactor?: string
  public?: boolean
  walking?: boolean
  distance: any
}

export interface Origin {
  type: string
  id: string
  name: string
  location: Location
  products: Products
}

export interface Location {
  type: string
  id: string
  latitude: number
  longitude: number
}

export interface Products {
  nationalExpress: boolean
  national: boolean
  regionalExp: boolean
  regional: boolean
  suburban: boolean
  bus: boolean
  ferry: boolean
  subway: boolean
  tram: boolean
  taxi: boolean
}

export interface Destination {
  type: string
  id: string
  name: string
  location: Location2
  products: Products2
}

export interface Location2 {
  type: string
  id: string
  latitude: number
  longitude: number
}

export interface Products2 {
  nationalExpress: boolean
  national: boolean
  regionalExp: boolean
  regional: boolean
  suburban: boolean
  bus: boolean
  ferry: boolean
  subway: boolean
  tram: boolean
  taxi: boolean
}

export interface Line {
  type: string
  id: string
  fahrtNr: string
  name: string
  public: boolean
  adminCode: string
  productName: string
  mode: string
  product: string
  operator: Operator
}

export interface Operator {
  type: string
  id: string
  name: string
}

export interface Price {
  amount: number
  currency: string
  hint: any
}
