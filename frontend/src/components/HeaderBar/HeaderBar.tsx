import "./HeaderBar.css";

//header with title and plant selector
export default function HeaderBar() {
  
  return (
    <div className="header-bar">
      <div className="header-title">
        Plant Diagnostics
      </div>

      <select className="header-select">
        <option>Sunfield Alpha - Kitchener</option>
      </select>
    </div>
  );
}
