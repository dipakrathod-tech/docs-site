"use client"

import React from "react"
import { motion } from "motion/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VscRepo } from 'react-icons/vsc'
import { GrWorkshop } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";


type Feature = {
  title: string
  description: React.ReactNode
  href?: string
  icon?: React.ReactNode
}

const features: Feature[] = [

  {
    title: "Projects",
    description: "Real-world projects with code samples, architecture insights, and deployment strategies for cloud and DevOps.",
    href: "/docs/projects",
    icon: <VscRepo className="h-6 w-6" aria-hidden />,
  },
    {
    title: "Guides & Tutorials",
    description:
      "Step-by-step tutorials on cloud platforms, DevOps tools, and software development best practices.",
    href: "/docs/tutorials",
    icon: <VscTools className="h-6 w-6" aria-hidden />,
  },
  {
    title: "Workshops",
    description: "Interactive workshops covering CI/CD pipelines, infrastructure as code, and modern development workflows.",
    href: "/docs/workshops",
    icon: <GrWorkshop className="h-6 w-6" aria-hidden />,
  },
]

export default function Featured() {
  return (
    <section aria-label="Featured" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-3xl font-extrabold">Explore Documentation</h2>
          <p className="mt-2 text-muted-foreground">
            Dive into my curated guides, projects, and workshops on cloud, DevOps, and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
              className="group"
            >
              <Card className="h-full transform will-change-transform transition-shadow group-hover:shadow-lg">
                <CardHeader className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2 text-primary transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">{f.icon}</div>
                    <CardTitle>{f.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription>{f.description}</CardDescription>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild size="sm">
                    <a href={f.href ?? "#"} aria-label={`Open ${f.title}`}>
                      Explore
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
