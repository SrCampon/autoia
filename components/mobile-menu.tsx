"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId)
    setIsOpen(false)
  }

  const menuItems = [
    { id: "servicios", label: "Servicios" },
    { id: "casos-uso", label: "Casos de Uso" },
    { id: "sobre-mi", label: "Sobre Mí" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden w-9 h-9 relative z-50"
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
      >
        <motion.div animate={isOpen ? "open" : "closed"} className="w-6 h-6 flex flex-col justify-center items-center">
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="w-6 h-0.5 bg-gray-900 dark:bg-white block transition-all origin-center"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-6 h-0.5 bg-gray-900 dark:bg-white block mt-1.5 transition-all"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="w-6 h-0.5 bg-gray-900 dark:bg-white block mt-1.5 transition-all origin-center"
          />
        </motion.div>
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Más oscuro y con mayor z-index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            {/* Menu Panel - Pantalla completa en móvil */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Navegación</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Cerrar menú"
                  >
                    <X className="h-5 w-5 text-gray-900 dark:text-white" />
                  </Button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-6 py-8 bg-white dark:bg-gray-900">
                  <motion.ul
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                      },
                      closed: {
                        transition: { staggerChildren: 0.05, staggerDirection: -1 },
                      },
                    }}
                    className="space-y-6"
                  >
                    {menuItems.map((item) => (
                      <motion.li
                        key={item.id}
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              y: { stiffness: 1000, velocity: -100 },
                            },
                          },
                          closed: {
                            y: 50,
                            opacity: 0,
                            transition: {
                              y: { stiffness: 1000 },
                            },
                          },
                        }}
                      >
                        <button
                          onClick={() => handleNavigate(item.id)}
                          className="block w-full text-left text-xl font-semibold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-4 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
                        >
                          {item.label}
                        </button>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <Button
                    onClick={() => handleNavigate("contacto")}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contactar Ahora
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
