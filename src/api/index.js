import axios from "axios";

export const statepatientData = async () => {
  try {
    const data = await axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india" ,{ headers: {
      'x-rapidapi-key': '7e8f102469msh9f81ccf22836c18p1b8991jsn1815ef40212f',
      'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
    }});
    return data.data;
  } catch (error) {
    return error;
  }
};

export const patientData = async () => {
  try {
    const response = await axios.get("https://api.covid19india.org/v4/min/data.min.json");
    const data= response.data;   
    return data;
  } catch (error) {
    return error;
  }
};
  export const worldpatientData = async () => {
    try {
      const data = await axios.get("https://covid-19-tracking.p.rapidapi.com/v1" ,{ headers: {
        'x-rapidapi-key': '77193f3ef6msh956fa91a56f30fbp1a29abjsn9d3cd897abe3',
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
      }});
      return data.data[0];
    } catch (error) {
      return error;
    }
  };
  export const IndiapatientData = async () => {
    try {
      const response = await axios.get("https://covid-19-tracking.p.rapidapi.com/v1" ,{ headers: {
        'x-rapidapi-key': '77193f3ef6msh956fa91a56f30fbp1a29abjsn9d3cd897abe3',
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
      }});
      const data= response.data[2];
      return data;
    } catch (error) {
      return error;
    }
  };

  export const vaccineData = async () => {
    try {
        const response = await  axios.get('https://sheetdb.io/api/v1/foeh194fd24g6');
        const data= response.data;
      return data;
    } catch (error) {
      return error;
    }
  };


