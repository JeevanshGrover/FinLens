import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../store/TransactionSlice.js";
import { toggleModal } from "../../store/UiSlice.js";

function AddTransactionCard() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.ui.modalOpen);
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  // 🔹 Unique categories for suggestions
  const categories = [...new Set(transactions.map((t) => t.category))];

  const [form, setForm] = useState({
    note: "",
    amount: "",
    category: "",
    type: "expense",
    date: new Date().toISOString().split("T")[0],
  });

  const [error, setError] = useState("");

  if (!modalOpen) return null;

  const close = () => dispatch(toggleModal(false));

  const handleSubmit = () => {
    if (!form.note) return setError("Description is required");
    if (!form.amount) return setError("Amount is required");
    if (!form.category) return setError("Category is required");

    setError("");

    dispatch(
      addTransaction({
        ...form,
        amount: parseFloat(form.amount),
        category: form.category.trim(),
      })
    );

    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
      
      <div className="w-[90%] max-w-md rounded-2xl border border-(--color-muted) bg-(--color-surface) p-6 text-(--color-text) shadow-[0_2px_8px_rgba(0,0,0,0.05)]">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl [font-family:var(--font-heading)]">New Transaction</h2>
          <button
            onClick={close}
            className="text-[color-mix(in_srgb,var(--color-text)_70%,transparent)] transition duration-200 hover:text-(--color-text)"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3">

          {/* Error */}
          {error && (
            <p className="text-sm text-(--color-danger)">{error}</p>
          )}

          {/* Description */}
          <input
            placeholder="Description"
            value={form.note}
            onChange={(e) => {
              setForm({ ...form, note: e.target.value });
              setError("");
            }}
            className={`h-10 rounded-xl border bg-(--color-surface) px-3 outline-none transition duration-200 focus:ring-2 ${
              error && !form.note
                ? "border-(--color-danger) focus:border-(--color-danger) focus:ring-[color-mix(in_srgb,var(--color-danger)_20%,transparent)]"
                : "border-(--color-muted) focus:border-(--color-primary) focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
            }`}
          />

          {/* Amount */}
          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => {
              setForm({ ...form, amount: e.target.value });
              setError("");
            }}
            className={`h-10 rounded-xl border bg-(--color-surface) px-3 outline-none transition duration-200 focus:ring-2 ${
              error && !form.amount
                ? "border-(--color-danger) focus:border-(--color-danger) focus:ring-[color-mix(in_srgb,var(--color-danger)_20%,transparent)]"
                : "border-(--color-muted) focus:border-(--color-primary) focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
            }`}
          />

          {/* Date */}
          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
            className="h-10 rounded-xl border border-(--color-muted) bg-(--color-surface) px-3 outline-none transition duration-200 focus:border-(--color-primary) focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
          />

          {/* Category with suggestions */}
          <input
            list="categories"
            placeholder="Category (e.g. Food, Travel)"
            value={form.category}
            onChange={(e) => {
              setForm({ ...form, category: e.target.value });
              setError("");
            }}
            className={`h-10 rounded-xl border bg-(--color-surface) px-3 outline-none transition duration-200 focus:ring-2 ${
              error && !form.category
                ? "border-(--color-danger) focus:border-(--color-danger) focus:ring-[color-mix(in_srgb,var(--color-danger)_20%,transparent)]"
                : "border-(--color-muted) focus:border-(--color-primary) focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
            }`}
          />

          <datalist id="categories">
            {categories.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>

          {/* Type Toggle */}
          <div className="flex gap-2">
            {["income", "expense"].map((t) => (
              <button
                key={t}
                onClick={() =>
                  setForm({ ...form, type: t })
                }
                className={`flex-1 rounded-xl border p-2 transition duration-200 hover:-translate-y-px active:scale-[0.98] ${
                  form.type === t
                    ? "border-(--color-primary) bg-(--color-primary) font-semibold text-white"
                    : "border-(--color-muted) bg-(--color-surface)"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="mt-3 rounded-xl bg-(--color-primary) p-2.5 text-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-px hover:brightness-95 active:scale-[0.98]"
          >
            Add Transaction
          </button>

        </div>
      </div>
    </div>
  );
}

export default AddTransactionCard;