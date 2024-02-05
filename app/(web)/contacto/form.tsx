"use client";

import React from "react";
import { Button, Card, Datepicker, Input, Label, Select, Tabs } from "pol-ui";

const ContactForm = () => {
  return (
    <Card className="bg-secondary-50">
      <form className="flex flex-col gap-4  rounded-2xl flex-1 w-full max-w-[600px] p-4 ">
        <div className="flex gap-2  flex-1">
          <div className="flex flex-col  flex-1">
            <label htmlFor="name">Nombre</label>
            <Input
              name="name"
              id="name"
              placeholder="Tu nombre"
              minLength={0}
              maxLength={100}
            />
          </div>
          <div className="flex flex-col  flex-1">
            <label htmlFor="surname">Apellidos</label>
            <Input
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
          <Input
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
          <Input
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
          <Datepicker
            inline
            name="date"
            id="date"
            minDate={new Date()}
            language="es"
          />
        </div>

        <div className="grid md:grid-rows-2 gap-4">
          <div className="flex flex-col relative gap-2 w-full">
            <Label htmlFor="contact">¿Cómo podría contactarte?</Label>
            <Select name="contact" id="contact" className="w-full">
              <option value="whatsapp">Whatsapp</option>
              <option value="email">Email</option>
              <option value="phone">Teléfono</option>
            </Select>
          </div>
          <div className="flex flex-col relative gap-2">
            <label htmlFor="conocido">¿Cómo me has conocido?</label>
            <Select name="conocido" id="conocido" className="w-full">
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="otro">Otro</option>
            </Select>
          </div>
        </div>
        <Tabs
          hasMotion={false}
          tabs={[
            {
              name: "Fotografía",
              content: (
                <Input
                  name="tel"
                  minLength={8}
                  maxLength={15}
                  id="tel"
                  type="tel"
                  placeholder="654 321 987"
                />
              ),
            },
            {
              name: "Diseño",
              content: (
                <Input
                  name="tel"
                  minLength={8}
                  maxLength={15}
                  id="tel"
                  type="tel"
                  placeholder="654 321 987"
                />
              ),
            },
          ]}
        />

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
    </Card>
  );
};
export default ContactForm;
