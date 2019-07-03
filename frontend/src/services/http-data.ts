import axios from 'axios';
import { DataItem } from '../models/data_item';

const backendUrl: string = 'http://localhost:3001';
export let dataItems: DataItem[] = [];

export const getDataFromDb = async () => {
  await fetch(`${backendUrl}/api/getData`)
    .then((data) => data.json())
    .then((res) => dataItems = res.data);
};

export const putDataToDB = async (message: string) => {
  let currentIds = dataItems.map((item) => item.id);
  let idToBeAdded = 0;
  while (currentIds.includes(idToBeAdded)) {
    ++idToBeAdded;
  }

  await axios.post(`${backendUrl}/api/putData`, {
    id: idToBeAdded,
    message: message,
  });
};

export const deleteFromDB = async (idTodelete: number) => {
  let objIdToDelete: number = 0;
  dataItems.forEach((item) => {
    if (item.id === idTodelete) {
      objIdToDelete = item.id;
    }
  });

  await axios.delete(`${backendUrl}/api/deleteData`, {
    data: {
      id: objIdToDelete,
    },
  });
};

export const updateDB = async (idToUpdate: number, updateToApply: string) => {
  let objIdToUpdate: number = 0;
  dataItems.forEach((item) => {
    if (item.id === idToUpdate) {
      objIdToUpdate = item.id;
    }
  });

  await axios.post(`${backendUrl}/api/updateData`, {
    id: objIdToUpdate,
    update: { message: updateToApply },
  });
};
