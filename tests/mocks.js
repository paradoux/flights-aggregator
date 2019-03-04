module.exports.airMoonMockResult = [
  {
    id: "e597f52b-02ad-40f5-8810-8aa7d8d8767b",
    price: 286.28,
    departure_time: "9:02 AM",
    arrival_time: "10:50 AM"
  },
  {
    id: "a597f52b-02ad-40f5-8810-8aa7d8d8769d",
    price: 786.88,
    departure_time: "11:02 AM",
    arrival_time: "1:50 PM"
  },
  {
    id: "e597f52b-02vd-40f5-8810-8aa7d8d8769c",
    price: 486.88,
    departure_time: "10:02 AM",
    arrival_time: "11:50 AM"
  },
  {
    id: "e597f52b-02ad-40f5-8810-8ab7d8d8769a",
    price: 186.88,
    departure_time: "7:02 PM",
    arrival_time: "10:50 PM"
  }
]

module.exports.airJazzMockResult = [
  {
    id: "e597f52b-02ad-40f5-8810-8aa7d8d8762a",
    price: 206.27,
    dtime: "9:02 AM",
    atime: "10:50 AM"
  },
  {
    id: "a597f52b-02ad-40f5-8810-8aa7d8d8762b",
    price: 326.18,
    dtime: "11:02 AM",
    atime: "1:50 PM"
  },
  {
    id: "e597f52b-02vd-40f5-8810-8aa7d8d8762c",
    price: 147.32,
    dtime: "10:02 AM",
    atime: "11:50 AM"
  },
  {
    id: "e597f52b-02ad-40f5-8810-8ab7d8d8762d",
    price: 66.12,
    dtime: "7:02 PM",
    atime: "10:50 PM"
  }
]

module.exports.airBeamMockResult =
  "id,p,departure,arrival\n14e6f085-b5b5-48f7-b3c5-6c6202d50f48,98.33,4:12 AM,5:02 AM\n46ea7e60-c0a4-429a-8917-3917d903236z,117.08,7:22 PM,5:58 AM\n14e6f085-b5b5-48f7-b3c5-6c6202d50f41,231.24,10:12 AM,2:02 PM"

module.exports.expectedResultsFlightsEndpoint = {
  sortedFlights: [
    {
      provider: "AIR_JAZZ",
      id: "e597f52b-02ad-40f5-8810-8ab7d8d8762d",
      price: 66.12,
      departure_time: "7:02 PM",
      arrival_time: "10:50 PM"
    },
    {
      provider: "AIR_BEAM",
      id: "14e6f085-b5b5-48f7-b3c5-6c6202d50f48",
      price: 98.33,
      departure_time: "4:12 AM",
      arrival_time: "5:02 AM"
    },
    {
      provider: "AIR_BEAM",
      id: "46ea7e60-c0a4-429a-8917-3917d903236z",
      price: 117.08,
      departure_time: "7:22 PM",
      arrival_time: "5:58 AM"
    },
    {
      provider: "AIR_JAZZ",
      id: "e597f52b-02vd-40f5-8810-8aa7d8d8762c",
      price: 147.32,
      departure_time: "10:02 AM",
      arrival_time: "11:50 AM"
    },
    {
      provider: "AIR_MOON",
      id: "e597f52b-02ad-40f5-8810-8ab7d8d8769a",
      price: 186.88,
      departure_time: "7:02 PM",
      arrival_time: "10:50 PM"
    },
    {
      provider: "AIR_JAZZ",
      id: "e597f52b-02ad-40f5-8810-8aa7d8d8762a",
      price: 206.27,
      departure_time: "9:02 AM",
      arrival_time: "10:50 AM"
    },
    {
      provider: "AIR_BEAM",
      id: "14e6f085-b5b5-48f7-b3c5-6c6202d50f41",
      price: 231.24,
      departure_time: "10:12 AM",
      arrival_time: "2:02 PM"
    },
    {
      provider: "AIR_MOON",
      id: "e597f52b-02ad-40f5-8810-8aa7d8d8767b",
      price: 286.28,
      departure_time: "9:02 AM",
      arrival_time: "10:50 AM"
    },
    {
      provider: "AIR_JAZZ",
      id: "a597f52b-02ad-40f5-8810-8aa7d8d8762b",
      price: 326.18,
      departure_time: "11:02 AM",
      arrival_time: "1:50 PM"
    },
    {
      provider: "AIR_MOON",
      id: "e597f52b-02vd-40f5-8810-8aa7d8d8769c",
      price: 486.88,
      departure_time: "10:02 AM",
      arrival_time: "11:50 AM"
    },
    {
      provider: "AIR_MOON",
      id: "a597f52b-02ad-40f5-8810-8aa7d8d8769d",
      price: 786.88,
      departure_time: "11:02 AM",
      arrival_time: "1:50 PM"
    }
  ]
}
