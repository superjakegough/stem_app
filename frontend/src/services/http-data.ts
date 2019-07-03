import axios from "axios";
import { DataItem } from "../models/data_item";

const backendUrl: string = "http://localhost:3001";
const apiRoute: string = "data";

export let dataItems: DataItem[] = [];

export const getAllData = async () => {
  const res = await axios.get(`${backendUrl}/${apiRoute}/getAll`);
  dataItems = res.data.data;
};

export const createData = async (message: string) => {
  const res = await axios.post(`${backendUrl}/${apiRoute}/create`, {
    message: message,
  });
  console.log(res.data);
};

export const updateData = async (id: string, message: string) => {
  const res = await axios.put(`${backendUrl}/${apiRoute}/update/${id}`, {
    message: message
  });
  console.log(res.data);
};

export const deleteData = async (id: string) => {
  const res = await axios.delete(`${backendUrl}/${apiRoute}/delete/${id}`);
  console.log(res.data);
};

