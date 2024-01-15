"use client";

import React from "react";
import { Button, Datepicker, Dropdown, DropdownItem, TextInput } from "pol-ui";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4  rounded-2xl flex-1 w-full max-w-[600px] p-4 bg-primary text-secondary-50">
      <div className="flex gap-2   flex-1">
        <div className="flex flex-col  flex-1">
          <label htmlFor="name">Nombre</label>
          <TextInput
            name="name"
            id="name"
            placeholder="Tu nombre"
            minLength={0}
            maxLength={100}
          />
        </div>
        <div className="flex flex-col  flex-1">
          <label htmlFor="surname">Apellidos</label>
          <TextInput
            name="surname"
            minLength={0}
            maxLength={100}
            id="surnames"
            placeholder="Tus apellidos"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <TextInput
          name="email"
          type="email"
          minLength={5}
          maxLength={150}
          id="email"
          placeholder="tuemail@email.com"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tel">Teléfono</label>
        <TextInput
          name="tel"
          minLength={8}
          maxLength={15}
          id="tel"
          type="tel"
          placeholder="654 321 987"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="date">¿Cuándo podría contactar con vosotros?</label>
        <Datepicker name="date" id="date" minDate={new Date()} language="es" />
      </div>

      <div className="grid md:grid-rows-2 gap-4">
        <div className="flex flex-col relative gap-2 w-full">
          <label htmlFor="contact">¿Cómo podría contactarte?</label>
          <Dropdown
            color="secondary"
            label="Selecciona una opción"
            name="contact"
            id="contact"
          >
            <DropdownItem>Whatsapp</DropdownItem>
            <DropdownItem>Correo electrónico</DropdownItem>
            <DropdownItem>Teléfono</DropdownItem>
          </Dropdown>
        </div>
        <div className="flex flex-col relative gap-2">
          <label htmlFor="conocido">¿Cómo me has conocido?</label>
          <Dropdown
            color="secondary"
            label="Selecciona una opción"
            name="conocido"
            id="conocido"
            className="w-full"
          >
            <DropdownItem>Google</DropdownItem>
            <DropdownItem>Redes sociales</DropdownItem>
            <DropdownItem>Recomendación</DropdownItem>
            <DropdownItem>Otro</DropdownItem>
          </Dropdown>
        </div>
      </div>

      {/*  */}
      <Button
        type="submit"
        className="w-full"
        onClick={() => {
          alert("Enviat");
        }}
      >
        Enviar
      </Button>
    </form>
  );
};
export default ContactForm;
