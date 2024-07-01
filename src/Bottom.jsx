function Bottom({ temp, weather, description, pressure, humidity }) {
  function capitalizeWords(str) {
    const words = str.split(" ");

    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(" ");
  }

  const descrp = capitalizeWords(description);

  return (
    <div className="text-white py-1">
      <div className="flex flex-row bg-zinc-800 rounded-3xl w-4/5 mx-auto my-3">
        <div className="w-1/2 p-2 text-center">Temperature</div>
        <div className="w-1/2 p-2 text-center">{temp}°C</div>
      </div>

      <div className="flex flex-row bg-zinc-800 rounded-3xl w-4/5 mx-auto my-3">
        <div className="w-1/2 p-2 text-center">Weather</div>
        <div className="w-1/2 p-2 text-center">{weather}</div>
      </div>

      <div className="flex flex-row bg-zinc-800 rounded-3xl w-4/5 mx-auto my-3">
        <div className="w-1/2 p-2 text-center">Description</div>
        <div className="w-1/2 p-2 text-center">{descrp}</div>
      </div>

      <div className="flex flex-row bg-zinc-800 rounded-3xl w-4/5 mx-auto my-3">
        <div className="w-1/2 p-2 text-center">Humidity</div>
        <div className="w-1/2 p-2 text-center">{humidity}%</div>
      </div>

      <div className="flex flex-row bg-zinc-800 rounded-3xl w-4/5 mx-auto my-3">
        <div className="w-1/2 p-2 text-center">Pressure</div>
        <div className="w-1/2 p-2 text-center">{pressure} hPa</div>
      </div>
    </div>
  );
}

export default Bottom;
