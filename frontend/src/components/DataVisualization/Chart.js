import { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ApiService from "../../services/ApiService";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SelectBox = ({ updateRegion }) => {
  const options = [
    { label: "UK", value: "UK" },
    { label: "DE", value: "DE" },
    { label: "ES", value: "ES" },
    { label: "IT", value: "IT" },
  ];

  const [selectedValue, setSelectedValue] = useState("UK");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    updateRegion(event.target.value)
  };

  return (
    <div className="w-64 mb-4">
      <label htmlFor="country-select" className="block text-white mb-2">
        Select Region:
      </label>
      <select
        id="country-select"
        value={selectedValue}
        onChange={handleChange}
        className="block w-full p-2 border rounded-md bg-gray-800 text-white border-gray-600"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

function transformData(data) {
  function getMonthYear(dateString) {
    const date = new Date(dateString);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  }

  const regions = {};

  data.forEach(item => {
    const region = item.region;
    const monthYear = getMonthYear(item.date);

    if (!regions[region]) {
      regions[region] = {};
    }

    if (!regions[region][monthYear]) {
      regions[region][monthYear] = 0;
    }

    regions[region][monthYear] += item.quantity;
  });
  const result = {
    regions: Object.keys(regions).map(region => ({
      name: region,
      values: Object.keys(regions[region]).map(monthYear => ({
        Month: monthYear,
        TotalQuantity: regions[region][monthYear]
      }))
    }))
  };

  return result;
}


const Chart = () => {
  const [selectedRegion, setSelectedRegion] = useState("UK")
  const [ordersData, setOrdersData] = useState([]);

  const regionData = useMemo(() => {
    return ordersData?.regions?.find(region => region.name === selectedRegion);
  }, [ordersData, selectedRegion]);

  const chartData = useMemo(() => {
    if (!regionData) return { labels: [], datasets: [] };

    return {
      labels: regionData.values.map(v => v.Month),
      datasets: [
        {
          label: `Total Orders in ${selectedRegion}`,
          data: regionData.values.map(v => v.TotalQuantity),
          backgroundColor: '#000',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          color: "#fff",
        },
      ],
    };
  }, [ordersData, selectedRegion]);



  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#FFFFFF",
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: `Orders for ${selectedRegion}`,
        color: "#FFFFFF",
        font: {
          size: 24,
        },
      },
      tooltip: {
        color: "#FFFFFF",
        callbacks: {

          label: function (context) {
            return ` ${context.raw} units`;
          },
        },
        titleFont: {
          size: 18,
        },
        bodyFont: {
          size: 14,
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 16,
          },
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 16,
          },
          beginAtZero: true,
        },
      },
    },
    elements: {
      color: "#FFFFFF",
      bar: {
        borderWidth: 2,
        borderRadius: 4,
      },
    },
    animation: {
      duration: 1500,
    },
  };

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const data = await ApiService.getSalesData();
        const transformedData = transformData(data);
        setOrdersData(transformedData);

      } catch (err) {
        console.log(err)
      }
    };

    fetchSalesData();
  }, []);
  return (
    <div className="bg-red-800 p-6 rounded-lg shadow-lg">
      <SelectBox ordersData={ordersData} updateRegion={setSelectedRegion} />
      <h2 className="text-2xl font-bold mb-4 text-white">Sales Data</h2>
      <div className="h-[100%] w-[100%] min-h-[420px] bg-red-700 text-white flex items-center justify-center">
       <Bar data={chartData} options={options}  />
      </div>
    </div>
  );
};

export default Chart;
