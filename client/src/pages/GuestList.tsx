// src/pages/GuestList.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type {Guest}  from '../server/Guest.ts';
import { getGuests,deleteGuest } from '../server/pocketbase.ts';

export default function GuestList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch guests on component mount
  useEffect(() => {
    setLoading(true);
    getGuests()
      .then(setGuests)
      .catch(err => setError(err.message || String(err)))
      .finally(() => setLoading(false));
  }, []);

  // Delete guest
  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this guest?')) return;

    try {
      await deleteGuest(id);
      setGuests(prev => prev.filter(g => g.id !== id));
    } catch (err: any) {
      alert('Delete failed: ' + (err.message || String(err)));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Guest List</h2>

      {loading && <div>Loading guests...</div>}
      {error && <div className="text-red-600">{error}</div>}

      {!loading && guests.length === 0 && (
        <div className="text-gray-600">No guests found.</div>
      )}

      {guests.length > 0 && (
        <table className="w-full bg-white shadow rounded overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guests.map(g => (
              <tr key={g.id} className="border-t">
                <td className="p-2">{g.name}</td>
                <td className="p-2">{g.email}</td>
                <td className="p-2">{g.phone}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => navigate(`/guests/${g.id}`)}
                    className="px-2 py-1 border rounded text-sm"
                  >
                    View / Edit
                  </button>
                  <button
                    // onClick={() => handleDelete(g.id)}
                    className="px-2 py-1 border rounded text-sm text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
