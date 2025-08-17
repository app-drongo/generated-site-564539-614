// Enhanced by AI on 2025-08-17T10:29:06.916Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Streamlined deployment and configuration for fast time-to-value.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Secure and Compliant",
      description: "Enterprise-grade security and regulatory compliance features.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Optimized user experience across all devices and screen sizes.",
      badge: "Usability"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Worldwide availability and localization for international operations.",
      badge: "Scalability"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive data insights to drive informed business decisions.",
      badge: "Visibility"
    },
    {
      icon: Palette,
      title: "Branded Experience",
      description: "Seamless integration with your company's visual identity.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer Friendly",
      description: "Powerful APIs and tools for easy integration and extensibility.",
      badge: "Flexibility"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Expert guidance and assistance whenever you need it.",
      badge: "Service"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Strict data protection policies to safeguard your information.",
      badge: "Trust"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Key Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevate Your SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Manufacturing Consulting
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful capabilities designed to streamline your SAP implementation and 
            drive operational excellence for your manufacturing clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your SAP manufacturing consulting practice?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule a Demo
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}