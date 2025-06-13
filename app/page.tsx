"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  MessageSquare,
  FileText,
  Calendar,
  Zap,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { StructuredData } from "@/components/structured-data"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" },
}

export default function AutoIALanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Bot className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">AutoIA</span>
              </motion.div>
              <div className="hidden md:flex space-x-8" role="menubar">
                {["servicios", "casos-uso", "sobre-mi", "contacto"].map((section, index) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => scrollToSection(section)}
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group"
                    role="menuitem"
                    whileHover={{ y: -2 }}
                  >
                    {section === "servicios" && "Servicios"}
                    {section === "casos-uso" && "Casos de Uso"}
                    {section === "sobre-mi" && "Sobre Mí"}
                    {section === "contacto" && "Contacto"}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </motion.button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <MobileMenu onNavigate={scrollToSection} />
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-title">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                    <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
                    Automatización Inteligente para tu Negocio
                  </Badge>
                </motion.div>

                <motion.h1
                  id="hero-title"
                  className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Transforma tu negocio con{" "}
                  <motion.span
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    AutoIA
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  Automatizamos procesos, optimizamos tareas y potenciamos tu productividad con inteligencia artificial.
                  Soluciones personalizadas para negocios que quieren crecer.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => scrollToSection("servicios")}
                      aria-describedby="hero-title"
                    >
                      Ver Servicios
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={scaleOnHover} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-300 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => scrollToSection("contacto")}
                    >
                      Contactar Ahora
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section
            id="servicios"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
            aria-labelledby="services-title"
          >
            <div className="max-w-7xl mx-auto">
              <motion.header
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Nuestros Servicios
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Soluciones de automatización e IA diseñadas para impulsar tu negocio hacia el futuro
                </p>
              </motion.header>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                role="list"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    icon: MessageSquare,
                    title: "Automatización WhatsApp",
                    description:
                      "Chatbots inteligentes para atención al cliente 24/7, gestión de pedidos y soporte automatizado.",
                    color: "emerald",
                  },
                  {
                    icon: FileText,
                    title: "Generación de Contenido IA",
                    description:
                      "Creación automática de contenido para redes sociales, blogs, emails y material de marketing.",
                    color: "purple",
                  },
                  {
                    icon: Calendar,
                    title: "Automatización Administrativa",
                    description:
                      "Gestión automática de citas, facturación, inventarios y procesos administrativos repetitivos.",
                    color: "orange",
                  },
                  {
                    icon: TrendingUp,
                    title: "Análisis Inteligente",
                    description:
                      "Reportes automáticos, análisis de datos y insights para tomar mejores decisiones de negocio.",
                    color: "teal",
                  },
                ].map((service, index) => (
                  <motion.article
                    key={service.title}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20 rounded-lg p-6 cursor-pointer"
                    role="listitem"
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <header className="text-center pb-4">
                      <motion.div
                        className={`mx-auto w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-${service.color}-200 transition-colors`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <service.icon className={`h-8 w-8 text-${service.color}-600`} aria-hidden="true" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    </header>
                    <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section
            id="casos-uso"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-800 dark:to-slate-900"
            aria-labelledby="cases-title"
          >
            <div className="max-w-7xl mx-auto">
              <motion.header
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 id="cases-title" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Casos de Uso Reales
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Descubre cómo nuestras automatizaciones han transformado negocios como el tuyo
                </p>
              </motion.header>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    icon: Bot,
                    title: "Restaurante Local",
                    badge: "WhatsApp + n8n",
                    description:
                      "Automatización completa de pedidos por WhatsApp con integración a sistema de cocina y notificaciones automáticas.",
                    metric: "+300% eficiencia en pedidos",
                    gradient: "from-emerald-400 to-teal-500",
                    badgeColor: "emerald",
                  },
                  {
                    icon: Users,
                    title: "Clínica Dental",
                    badge: "ChatGPT + Calendly",
                    description:
                      "Sistema de citas automático con recordatorios, confirmaciones y seguimiento post-consulta personalizado.",
                    metric: "-80% tiempo administrativo",
                    gradient: "from-purple-400 to-pink-500",
                    badgeColor: "purple",
                  },
                  {
                    icon: Zap,
                    title: "E-commerce",
                    badge: "IA + Automatización",
                    description:
                      "Generación automática de descripciones de productos, respuestas a clientes y gestión de inventario inteligente.",
                    metric: "+150% conversiones",
                    gradient: "from-orange-400 to-red-500",
                    badgeColor: "orange",
                  },
                ].map((useCase, index) => (
                  <motion.article
                    key={useCase.title}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20 rounded-lg group cursor-pointer"
                    role="listitem"
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <motion.div
                      className={`h-48 bg-gradient-to-br ${useCase.gradient} flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <useCase.icon className="h-16 w-16 text-white" aria-hidden="true" />
                      </motion.div>
                    </motion.div>
                    <div className="p-6">
                      <header className="mb-4">
                        <h3 className="text-xl font-bold dark:text-white mb-2">{useCase.title}</h3>
                        <Badge
                          className={`w-fit bg-${useCase.badgeColor}-100 text-${useCase.badgeColor}-800 dark:bg-${useCase.badgeColor}-900 dark:text-${useCase.badgeColor}-100`}
                        >
                          {useCase.badge}
                        </Badge>
                      </header>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
                      <motion.div
                        className={`flex items-center text-${useCase.badgeColor}-600 dark:text-${useCase.badgeColor}-400 font-semibold`}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" aria-hidden="true" />
                        {useCase.metric}
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="sobre-mi"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
            aria-labelledby="about-title"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.article
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <header className="mb-6">
                    <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                      Sobre Mí
                    </h2>
                  </header>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Soy <span className="font-semibold text-emerald-600 dark:text-emerald-400">Miguel Ángel</span>,
                    desarrollador especializado en automatización e inteligencia artificial con más de 5 años de
                    experiencia transformando negocios locales.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Mi pasión es ayudar a emprendedores y pequeñas empresas a optimizar sus procesos mediante tecnología
                    accesible y efectiva. Creo firmemente que la automatización no debe ser exclusiva de las grandes
                    corporaciones.
                  </p>
                  <motion.ul
                    className="space-y-4"
                    role="list"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {[
                      "+50 proyectos de automatización exitosos",
                      "Especialista en n8n, ChatGPT y WhatsApp Business",
                      "Enfoque en soluciones personalizadas y escalables",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        role="listitem"
                        variants={fadeInLeft}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle
                          className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3"
                          aria-hidden="true"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.article>

                <motion.div
                  className="flex justify-center items-center w-full"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="relative mx-auto">
                    <motion.div
                      className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl"
                      whileHover={{
                        scale: 1.05,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div className="w-56 h-56 sm:w-72 sm:h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                            <Bot
                              className="h-20 w-20 sm:h-24 sm:w-24 text-emerald-600 dark:text-emerald-500 mx-auto mb-4"
                              aria-hidden="true"
                            />
                          </motion.div>
                          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Miguel Ángel</p>
                          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Desarrollador AutoIA</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      }}
                    >
                      <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contacto"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-slate-800"
            aria-labelledby="contact-title"
          >
            <div className="max-w-7xl mx-auto">
              <motion.header
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 id="contact-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  ¿Listo para Automatizar?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Cuéntame sobre tu negocio y descubramos juntos cómo la automatización puede transformarlo
                </p>
              </motion.header>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="border-0 shadow-2xl dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                          Envíame un Mensaje
                        </CardTitle>
                        <CardDescription className="dark:text-gray-300">
                          Respondo en menos de 24 horas. ¡Hablemos de tu proyecto!
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form
                          action="https://formsubmit.co/mcamponiglesias@gmail.com"
                          method="POST"
                          className="space-y-6"
                          noValidate
                        >
                          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <label htmlFor="name" className="sr-only">
                              Nombre
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Tu nombre"
                              required
                              className="h-12 dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-emerald-500"
                              aria-describedby="name-error"
                            />
                          </motion.div>
                          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <label htmlFor="email" className="sr-only">
                              Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Tu email"
                              required
                              className="h-12 dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-emerald-500"
                              aria-describedby="email-error"
                            />
                          </motion.div>
                          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <label htmlFor="message" className="sr-only">
                              Mensaje
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Cuéntame sobre tu negocio y qué te gustaría automatizar..."
                              required
                              rows={5}
                              className="dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-emerald-500"
                              aria-describedby="message-error"
                            />
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              type="submit"
                              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              Enviar Mensaje
                              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                            </Button>
                          </motion.div>
                        </form>

                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                <motion.aside
                  className="space-y-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                    <motion.address
                      className="space-y-6 not-italic"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {[
                        { icon: Mail, label: "Email", value: "miguel@autoia.com", href: "mailto:miguel@autoia.com" },
                        { icon: Phone, label: "WhatsApp", value: "+34 600 123 456", href: "tel:+34600123456" },
                        { icon: MapPin, label: "Ubicación", value: "España (Remoto)", href: null },
                      ].map((contact, index) => (
                        <motion.div
                          key={contact.label}
                          className="flex items-center group cursor-pointer"
                          variants={fadeInRight}
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-emerald-500 transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <contact.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </motion.div>
                          <div>
                            <p className="text-gray-300">{contact.label}</p>
                            {contact.href ? (
                              <a
                                href={contact.href}
                                className="text-white font-semibold hover:text-emerald-400 transition-colors"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-white font-semibold">{contact.value}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.address>
                  </div>

                  <motion.div
                    className="bg-emerald-600/10 rounded-2xl p-6 border border-emerald-600/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-white mb-4">¿Por qué elegir AutoIA?</h4>
                    <motion.ul
                      className="space-y-3 text-gray-300"
                      role="list"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {[
                        "Consulta inicial gratuita",
                        "Soluciones personalizadas",
                        "Soporte continuo incluido",
                        "ROI garantizado en 3 meses",
                      ].map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center"
                          role="listitem"
                          variants={fadeInLeft}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" aria-hidden="true" />
                          {benefit}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <motion.footer
          className="bg-gray-900 dark:bg-black py-12 px-4 sm:px-6 lg:px-8"
          role="contentinfo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="flex items-center space-x-2 mb-4 md:mb-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Bot className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                <span className="text-2xl font-bold text-white">AutoIA</span>
              </motion.div>
              <p className="text-gray-400 text-center md:text-right">
                © 2024 AutoIA. Transformando negocios con inteligencia artificial.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  )
}
