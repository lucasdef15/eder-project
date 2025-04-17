import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  return (
    <section className="bg-gray-100  px-5">
      <div className="max-w-5xl mx-auto text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Onde Estamos!</h2>
        <p className="text-gray-600">
          Venha nos visitar! Estamos localizados em um ponto de fácil acesso.
        </p>
      </div>
      <div className="h-[50vh] shadow-lg rounded-xl overflow-hidden  border border-gray-300">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.758608752717!2d-47.821191125051854!3d-21.201746179167145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bec604e3cd0d%3A0x4cc985267762b06e!2sAv.%20Independ%C3%AAncia%2C%203146%20-%20Alto%20da%20Boa%20Vista%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-230!5e0!3m2!1spt-BR!2sbr!4v1744734717020!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>{" "}
      <section className="flex bg-emerald-100 w-fit mx-auto relative -top-50 p-5 rounded-lg shadow-xl">
        <div className="p-5 w-[50%] mx-auto">
          <div className="flex flex-col gap-3 ">
            <h2 className="font-medium">WHY CHOOSE US</h2>
            <h1 className="font-medium text-3xl">
              Free Consultation - Begin Your Healing Journey
            </h1>
            <p className="text-sm">
              Connect with a dedicated specialist today and take the first step
              towards a healthier, more fulfilling life.
            </p>
          </div>
          {/* separator */}
          <div className="border-b-1 p-5 mb-5 border-b-black/10 w-[90%] mx-auto"></div>

          <div className="flex flex-col gap-4  text-emerald-900 items-center lg:items-start">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-600" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-600" />
              <span>contato@mindfulness.com.br</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-600" />
              <span>Rua do Equilíbrio, 123 - São Paulo, SP</span>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </section>
  );
};

export default Contact;
