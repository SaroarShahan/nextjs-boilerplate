type Labor = {
  id: number;
  name: string;
  rate: number;
  hours: number;
  total_cost: number;
};

type Service = {
  id: number;
  name: string;
  concern: string;
  cause: string;
  correction: string;
  labor: Labor[];
};

type Order = {
  id: number;
  name: string;
  description: string;
  services: Service[];
};

type OrderPayload = {
  name: string;
  services: Service[];
  labor: Labor[];
  total_cost_labor: number;
  total_cost_service: number;
  total_cost: number;
};
