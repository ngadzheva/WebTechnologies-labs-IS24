import * as fs from 'fs';

export const read = (filename: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      let result: string;

      if (error) {
        result = 'Error reading file';

        reject(error);

        return;
      }

      result = JSON.stringify(data);

      resolve(result);
    });
  });
};

export const write = (filename: string, data: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (error) => {
      let result;

      if (error) {
        result = 'Error writing file';

        reject(result);

        return;
      }

      resolve();
    });

  });

};

// export { read, write };