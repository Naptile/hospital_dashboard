import { useState, useEffect } from "react";

function AddPatientModal({
  isOpen,
  onClose,
  onSave,
  editingPatient,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    if (editingPatient) {
      setName(editingPatient.name);
      setAge(editingPatient.age);
      setCondition(editingPatient.condition);
    } else {
      setName("");
      setAge("");
      setCondition("");
    }
  }, [editingPatient]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const patientData = {
      id: editingPatient
        ? editingPatient.id
        : Date.now(),
      name,
      age,
      condition,
      status: editingPatient
        ? editingPatient.status
        : "Stable",
    };

    onSave(patientData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {editingPatient
              ? "Edit Patient"
              : "Add Patient"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Patient name"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="number"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
            placeholder="Age"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            value={condition}
            onChange={(e) =>
              setCondition(e.target.value)
            }
            placeholder="Condition"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {editingPatient
              ? "Update Patient"
              : "Save Patient"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPatientModal;