function SummaryCard({ title, value, type = "default" }) {
  const styles = {
    income: {
      text: "text-green-600",
      bar: "bg-green-500"
    },
    expense: {
      text: "text-red-500",
      bar: "bg-red-500"
    },
    balance: {
      text: "text-gray-800",
      bar: "bg-gray-800"
    },
    default: {
      text: "text-gray-800",
      bar: "bg-gray-400"
    }
  };

  const current = styles[type];

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 w-full">
      
      {/* Title */}
      <p className="text-xs text-gray-400 uppercase tracking-wide">
        {title}
      </p>

      {/* Value */}
      <h3 className={`text-2xl font-semibold mt-2 ${current.text}`}>
        ₹{value}
      </h3>

    </div>
  );
}

export default SummaryCard;