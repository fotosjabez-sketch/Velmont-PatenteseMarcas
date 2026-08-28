"use client";

import { useState } from "react";
import { buildOptions, momentOptions } from "@/content/diagnostic";
import { whatsappUrl } from "@/content/site";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

/**
 * FORMULÁRIO DE CONTATO
 *
 * Sem backend configurado neste repositório: o formulário compõe uma mensagem
 * estruturada e a abre no WhatsApp da Velmont (canal oficial informado no
 * material institucional), com alternativa por e-mail.
 * Para ligar a um endpoint próprio, ver README → "Formulário de contato".
 */

const fieldBase =
  "w-full border-0 border-b border-ink-900/25 bg-transparent pb-3 pt-2 text-[1rem] text-ink-900 " +
  "outline-none transition-colors duration-300 placeholder:text-ink-500 focus:border-wine-800";

function Field({
  id,
  label,
  children,
  hint,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="t-eyebrow mb-1 block text-ink-500">
        {label}
      </label>
      {children}
      {hint && (
        <span id={`${id}-hint`} className="mt-2 block text-[0.75rem] text-ink-500">
          {hint}
        </span>
      )}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    building: "",
    moment: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const compose = () => {
    const build = buildOptions.find((b) => b.id === form.building);
    const moment = momentOptions.find((m) => m.id === form.moment);
    return [
      "Olá, Velmont. Vim pelo site.",
      "",
      `Nome: ${form.name || "—"}`,
      form.company && `Empresa: ${form.company}`,
      form.email && `E-mail: ${form.email}`,
      form.phone && `Telefone: ${form.phone}`,
      build && `Estou construindo: ${build.label}`,
      moment && `Momento: ${moment.label}`,
      "",
      form.message && form.message,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl(compose()), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <Field id="contato-nome" label="Nome *">
          <input
            id="contato-nome"
            required
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Como podemos te chamar"
            className={fieldBase}
            autoComplete="name"
          />
        </Field>
        <Field id="contato-empresa" label="Empresa">
          <input
            id="contato-empresa"
            type="text"
            value={form.company}
            onChange={set("company")}
            placeholder="Nome do negócio"
            className={fieldBase}
            autoComplete="organization"
          />
        </Field>
        <Field id="contato-email" label="E-mail *">
          <input
            id="contato-email"
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="voce@empresa.com"
            className={fieldBase}
            autoComplete="email"
          />
        </Field>
        <Field id="contato-telefone" label="Telefone">
          <input
            id="contato-telefone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="(00) 00000-0000"
            className={fieldBase}
            autoComplete="tel"
          />
        </Field>
        <Field id="contato-construindo" label="O que você está construindo">
          <select id="contato-construindo" value={form.building} onChange={set("building")} className={cn(fieldBase, "cursor-pointer")}>
            <option value="">Selecione</option>
            {buildOptions.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="contato-momento" label="Em que momento você está">
          <select id="contato-momento" value={form.moment} onChange={set("moment")} className={cn(fieldBase, "cursor-pointer")}>
            <option value="">Selecione</option>
            {momentOptions.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id="contato-mensagem"
        label="O que você precisa resolver"
        hint="Quanto mais concreto, mais útil é a primeira resposta."
      >
        <textarea
          id="contato-mensagem"
          aria-describedby="contato-mensagem-hint"
          value={form.message}
          onChange={set("message")}
          rows={4}
          placeholder="Descreva a situação em poucas linhas."
          className={cn(fieldBase, "resize-none")}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <Button type="submit" variant="solid" arrow magnetic>
          Enviar pelo WhatsApp
        </Button>
        <a
          href={`mailto:contato@grupovelmont.com?subject=${encodeURIComponent(
            "Contato pelo site — Velmont",
          )}&body=${encodeURIComponent(compose())}`}
          className="text-[0.8125rem] uppercase tracking-[0.14em] text-ink-500 underline decoration-ink-300 underline-offset-4 transition-colors duration-300 hover:text-wine-800"
        >
          Prefiro por e-mail
        </a>
      </div>

      <p aria-live="polite" className="text-[0.8125rem] text-ink-500">
        {sent
          ? "Mensagem montada e aberta no WhatsApp. Se a janela não abriu, use a opção por e-mail."
          : "Nenhum dado é armazenado neste site: o formulário apenas monta a mensagem para você enviar."}
      </p>
    </form>
  );
}
