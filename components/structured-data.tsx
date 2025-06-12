export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://autoia.com/#organization",
        name: "AutoIA",
        url: "https://autoia.com",
        logo: {
          "@type": "ImageObject",
          url: "https://autoia.com/logo.png",
          width: 512,
          height: 512,
        },
        description:
          "Especialistas en automatización e inteligencia artificial para negocios. Transformamos procesos con chatbots WhatsApp, generación de contenido IA y automatización administrativa.",
        founder: {
          "@type": "Person",
          name: "Miguel Ángel",
          jobTitle: "Desarrollador especializado en automatización e IA",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+34-600-123-456",
          contactType: "customer service",
          email: "miguel@autoia.com",
          availableLanguage: "Spanish",
        },
        areaServed: {
          "@type": "Country",
          name: "España",
        },
        serviceType: [
          "Automatización de procesos",
          "Chatbots WhatsApp",
          "Generación de contenido IA",
          "Automatización administrativa",
          "Análisis inteligente de datos",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://autoia.com/#website",
        url: "https://autoia.com",
        name: "AutoIA",
        description: "Automatización e Inteligencia Artificial para Negocios",
        publisher: {
          "@id": "https://autoia.com/#organization",
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "WebPage",
        "@id": "https://autoia.com/#webpage",
        url: "https://autoia.com",
        name: "AutoIA - Automatización e Inteligencia Artificial para Negocios",
        isPartOf: {
          "@id": "https://autoia.com/#website",
        },
        about: {
          "@id": "https://autoia.com/#organization",
        },
        description:
          "Transformamos tu negocio con automatización e IA. Chatbots WhatsApp, generación de contenido, automatización administrativa y análisis inteligente.",
        breadcrumb: {
          "@id": "https://autoia.com/#breadcrumb",
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://autoia.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://autoia.com",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Automatización WhatsApp",
        description: "Chatbots inteligentes para atención al cliente 24/7, gestión de pedidos y soporte automatizado",
        provider: {
          "@id": "https://autoia.com/#organization",
        },
        serviceType: "Automatización de procesos",
      },
      {
        "@type": "Service",
        name: "Generación de Contenido IA",
        description: "Creación automática de contenido para redes sociales, blogs, emails y material de marketing",
        provider: {
          "@id": "https://autoia.com/#organization",
        },
        serviceType: "Inteligencia Artificial",
      },
      {
        "@type": "Service",
        name: "Automatización Administrativa",
        description: "Gestión automática de citas, facturación, inventarios y procesos administrativos repetitivos",
        provider: {
          "@id": "https://autoia.com/#organization",
        },
        serviceType: "Automatización de procesos",
      },
      {
        "@type": "Service",
        name: "Análisis Inteligente",
        description: "Reportes automáticos, análisis de datos y insights para tomar mejores decisiones de negocio",
        provider: {
          "@id": "https://autoia.com/#organization",
        },
        serviceType: "Análisis de datos",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
