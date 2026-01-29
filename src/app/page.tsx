'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Database, Globe, Shield, Sparkles, Download, Search, Filter, GitBranch, CheckCircle2, Mail, Menu, X } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1E1B] text-[#F4F3EC] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1E1B]/80 backdrop-blur-sm border-b border-[#F4F3EC]/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'PT Sans, sans-serif' }}>
              <span className="text-[#16B6A3]">J</span>DOM
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#vision" className="hover:text-[#16B6A3] transition-colors">Vision</a>
              <a href="#objectifs" className="hover:text-[#16B6A3] transition-colors">Objectifs</a>
              <a href="#fonctionnalites" className="hover:text-[#16B6A3] transition-colors">Fonctionnalités</a>
              <a href="#processus" className="hover:text-[#16B6A3] transition-colors">Comment ça marche</a>
              <a href="#newsletter" className="hover:text-[#16B6A3] transition-colors">Contact</a>
              <select className="bg-[#1A1E1B] border border-[#F4F3EC]/20 rounded px-3 py-1 text-sm">
                <option>FR</option>
                <option>EN</option>
              </select>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#vision" className="hover:text-[#16B6A3] transition-colors" onClick={() => setMenuOpen(false)}>Vision</a>
              <a href="#objectifs" className="hover:text-[#16B6A3] transition-colors" onClick={() => setMenuOpen(false)}>Objectifs</a>
              <a href="#fonctionnalites" className="hover:text-[#16B6A3] transition-colors" onClick={() => setMenuOpen(false)}>Fonctionnalités</a>
              <a href="#processus" className="hover:text-[#16B6A3] transition-colors" onClick={() => setMenuOpen(false)}>Comment ça marche</a>
              <a href="#newsletter" className="hover:text-[#16B6A3] transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <GlobeWorldCanvas />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'PT Sans, sans-serif' }}
          >
            <span className="text-[#16B6A3]">JDOM</span> : Le Portail National<br />
            des Données Ouvertes du Mali
          </h1>
          <p 
            className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-[#F4F3EC]/80 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Transparence, innovation et souveraineté numérique pour le développement du Mali.
            Accédez librement aux données publiques et contribuez à l'avenir numérique de notre nation.
          </p>
          <button 
            className={`group relative px-8 py-4 bg-[#16B6A3] text-[#1A1E1B] font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(22,182,163,0.5)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-500`}
            style={{ fontFamily: 'PT Sans, sans-serif' }}
          >
            <span className="flex items-center gap-2">
              Explorer le Catalogue
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-[#1A1E1B]">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-96 rounded-2xl bg-gradient-to-br from-[#16B6A3]/20 to-transparent p-8 flex items-center justify-center border border-[#F4F3EC]/10">
                <div className="absolute inset-0 rounded-2xl bg-[#16B6A3]/5 blur-3xl"></div>
                <div className="relative grid grid-cols-3 gap-4 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-[#16B6A3]/10 border border-[#16B6A3]/20 flex items-center justify-center hover:bg-[#16B6A3]/20 transition-colors">
                      <Database className="text-[#16B6A3]" size={24} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                  Notre <span className="text-[#16B6A3]">Vision</span>
                </h2>
                <p className="text-lg text-[#F4F3EC]/80 mb-6 leading-relaxed">
                  JDOM (Jeux de Données Ouverts du Mali) est le portail national centralisé pour la publication et la consultation de données ouvertes. Notre mission est de créer un écosystème numérique transparent, accessible et innovant qui favorise le développement socio-économique du Mali.
                </p>
                <p className="text-lg text-[#F4F3EC]/80 mb-8 leading-relaxed">
                  En centralisant, normalisant et libérant les données publiques, nous ouvrons de nouvelles perspectives pour les citoyens, les entreprises et les institutions. Ensemble, construisons un Mali numérique fondé sur la transparence et l'innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-[#16B6A3]">
                    <CheckCircle2 size={20} />
                    <span>Transparence</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#16B6A3]">
                    <CheckCircle2 size={20} />
                    <span>Accessibilité</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#16B6A3]">
                    <CheckCircle2 size={20} />
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectifs" className="py-24 bg-[#1A1E1B]">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ fontFamily: 'PT Sans, sans-serif' }}>
              Nos <span className="text-[#16B6A3]">Objectifs</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ObjectiveCard
                icon={<Database size={40} className="text-[#16B6A3]" />}
                title="Catalogue National"
                description="Base de données centralisée et structurée de toutes les données publiques maliennes, facilement accessibles et navigables."
              />
              <ObjectiveCard
                icon={<Download size={40} className="text-[#16B6A3]" />}
                title="Accès Libre"
                description="Téléchargement gratuit et accès API pour tous. Les données sont disponibles en plusieurs formats standards."
              />
              <ObjectiveCard
                icon={<Shield size={40} className="text-[#16B6A3]" />}
                title="Transparence Publique"
                description="Engagement envers la transparence des données publiques avec traçabilité complète et documentation détaillée."
              />
              <ObjectiveCard
                icon={<Sparkles size={40} className="text-[#16B6A3]" />}
                title="Innovation & Économie"
                description="Stimuler l'innovation numérique et créer des opportunités économiques par la réutilisation des données."
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="py-24 bg-[#1A1E1B]">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ fontFamily: 'PT Sans, sans-serif' }}>
              <span className="text-[#16B6A3]">Fonctionnalités</span> Clés
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Database size={48} className="text-[#16B6A3]" />}
                title="Catalogue Paginé"
                description="Navigation intuitive à travers des milliers de jeux de données avec pagination intelligente et tri personnalisable."
              />
              <FeatureCard
                icon={<Search size={48} className="text-[#16B6A3]" />}
                title="Recherche Avancée"
                description="Filtres puissants par thème, organisation, format de données et date pour trouver rapidement l'information recherchée."
              />
              <FeatureCard
                icon={<Filter size={48} className="text-[#16B6A3]" />}
                title="Accès API"
                description="Interface RESTful complète pour intégrer les données dans vos applications avec authentification et limitation de débit."
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" className="py-24 bg-[#1A1E1B]">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ fontFamily: 'PT Sans, sans-serif' }}>
              Comment <span className="text-[#16B6A3]">ça marche</span> ?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <ProcessStep
                step={1}
                icon={<GitBranch size={32} className="text-[#16B6A3]" />}
                title="Collecte"
                description="Récupération des données publiques auprès des institutions gouvernementales et organisations partenaires."
              />
              <ProcessStep
                step={2}
                icon={<Filter size={32} className="text-[#16B6A3]" />}
                title="Normalisation"
                description="Standardisation des formats de données et métadonnées selon les normes internationales d'open data."
              />
              <ProcessStep
                step={3}
                icon={<Database size={32} className="text-[#16B6A3]" />}
                title="Publication"
                description="Mise en ligne des jeux de données avec documentation complète et accès libre pour tous les utilisateurs."
              />
              <ProcessStep
                step={4}
                icon={<Sparkles size={32} className="text-[#16B6A3]" />}
                title="Réutilisation"
                description="Encouragement du développement d'applications et services innovants basés sur les données publiques."
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-b from-[#16B6A3]/10 to-[#1A1E1B]">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ fontFamily: 'PT Sans, sans-serif' }}>
              Pourquoi <span className="text-[#16B6A3]">JDOM</span> est unique ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ImpactCard
                title="Souveraineté Numérique"
                description="Contrôle total des données nationales avec hébergement local et conformité aux lois maliennes sur la protection des données."
              />
              <ImpactCard
                title="Engagement Communautaire"
                description="Plateforme collaborative ouverte aux citoyens, développeurs et organisations pour contribuer et enrichir l'écosystème."
              />
              <ImpactCard
                title="Support Administratif"
                description="Accompagnement des institutions dans la mise à disposition de leurs données avec assistance technique et formation."
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-[#1A1E1B]">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <Mail size={64} className="text-[#16B6A3] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'PT Sans, sans-serif' }}>
                Restez <span className="text-[#16B6A3]">Informé</span>
              </h2>
              <p className="text-lg text-[#F4F3EC]/80 mb-8">
                Inscrivez-vous pour recevoir les dernières mises à jour du portail et les nouveaux jeux de données disponibles.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-full bg-[#F4F3EC]/5 border border-[#F4F3EC]/20 focus:border-[#16B6A3] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#16B6A3] text-[#1A1E1B] font-semibold rounded-full hover:scale-105 transition-transform"
                  style={{ fontFamily: 'PT Sans, sans-serif' }}
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1A1E1B] border-t border-[#F4F3EC]/10 mt-auto">
        <div className="container mx-auto px-6 text-center text-[#F4F3EC]/60">
          <p>© {new Date().getFullYear()} JDOM - Jeux de Données Ouverts du Mali. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

function GlobeWorldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Globe parameters
    let rotationX = 0
    let rotationY = 0
    const baseGlobeRadius = Math.min(canvas.width, canvas.height) * 0.22

    // Generate 3D points on sphere surface
    const numMainPoints = 100
    const mainPoints: Array<{
      x: number
      y: number
      z: number
      originalX: number
      originalY: number
      originalZ: number
      pulsePhase: number
      size: number
    }> = []

    for (let i = 0; i < numMainPoints; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)

      const x = baseGlobeRadius * Math.sin(phi) * Math.cos(theta)
      const y = baseGlobeRadius * Math.sin(phi) * Math.sin(theta)
      const z = baseGlobeRadius * Math.cos(phi)

      mainPoints.push({
        x, y, z,
        originalX: x,
        originalY: y,
        originalZ: z,
        pulsePhase: Math.random() * Math.PI * 2,
        size: Math.random() * 2 + 1
      })
    }

    // Generate connections between nearby points
    const connections: Array<{ p1: number; p2: number; dataPhase: number }> = []
    for (let i = 0; i < numMainPoints; i++) {
      for (let j = i + 1; j < numMainPoints; j++) {
        const dist = Math.sqrt(
          Math.pow(mainPoints[i].originalX - mainPoints[j].originalX, 2) +
          Math.pow(mainPoints[i].originalY - mainPoints[j].originalY, 2) +
          Math.pow(mainPoints[i].originalZ - mainPoints[j].originalZ, 2)
        )
        if (dist < baseGlobeRadius * 0.55) {
          connections.push({ p1: i, p2: j, dataPhase: Math.random() * Math.PI * 2 })
        }
      }
    }

    // Generate orbital particles
    const numOrbitalParticles = 40
    const orbitalParticles: Array<{
      angle: number
      elevation: number
      radius: number
      speed: number
      size: number
      orbitTiltX: number
      orbitTiltY: number
    }> = []

    for (let i = 0; i < numOrbitalParticles; i++) {
      orbitalParticles.push({
        angle: Math.random() * Math.PI * 2,
        elevation: (Math.random() - 0.5) * Math.PI * 0.8,
        radius: baseGlobeRadius * (1.3 + Math.random() * 0.5),
        speed: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2 + 1,
        orbitTiltX: (Math.random() - 0.5) * 0.3,
        orbitTiltY: (Math.random() - 0.5) * 0.3
      })
    }

    // Mouse movement tracking with smoothing
    let targetRotationX = 0
    let targetRotationY = 0
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      mouseX = (e.clientX - centerX) / centerX
      mouseY = (e.clientY - centerY) / centerY
      targetRotationY = mouseX * Math.PI * 0.8
      targetRotationX = mouseY * Math.PI * 0.4
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Smooth rotation with auto-rotation
    let autoRotationY = 0
    let breathingPhase = 0

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const time = Date.now() * 0.001

      // Smooth interpolation towards target rotation
      rotationX += (targetRotationX - rotationX) * 0.04
      rotationY += (targetRotationY - rotationY) * 0.04

      // Add subtle auto-rotation
      autoRotationY += 0.0015
      const finalRotationY = rotationY + autoRotationY

      // Breathing effect for globe size
      breathingPhase += 0.02
      const breathingScale = 1 + Math.sin(breathingPhase) * 0.02
      const globeRadius = baseGlobeRadius * breathingScale

      // Rotation matrices
      const cosX = Math.cos(rotationX)
      const sinX = Math.sin(rotationX)
      const cosY = Math.cos(finalRotationY)
      const sinY = Math.sin(finalRotationY)

      // Transform and project points
      const projectedPoints = mainPoints.map((point, index) => {
        let x = point.originalX * breathingScale
        let y = point.originalY * breathingScale
        let z = point.originalZ * breathingScale

        // Rotate around Y axis
        const tempX = x * cosY - z * sinY
        const tempZ = x * sinY + z * cosY
        x = tempX
        z = tempZ

        // Rotate around X axis
        const tempY = y * cosX - z * sinX
        z = y * sinX + z * cosX
        y = tempY

        // Pulse animation
        point.pulsePhase += 0.03
        const pulseScale = 1 + Math.sin(point.pulsePhase) * 0.2

        point.x = x
        point.y = y
        point.z = z

        // Project to 2D
        const scale = Math.max(0.1, 350 / (350 + z))
        const projectedX = centerX + x * scale
        const projectedY = centerY + y * scale

        return {
          x: projectedX,
          y: projectedY,
          z: z,
          scale: scale,
          pulseScale,
          index
        }
      })

      // Draw outer glow layers (halo effect)
      const haloLayers = [0.15, 0.1, 0.05]
      haloLayers.forEach((opacity, layer) => {
        const haloGradient = ctx.createRadialGradient(
          centerX, centerY, globeRadius * (0.8 + layer * 0.2),
          centerX, centerY, globeRadius * (1.2 + layer * 0.2)
        )
        haloGradient.addColorStop(0, `rgba(22, 182, 163, ${opacity})`)
        haloGradient.addColorStop(0.5, `rgba(22, 182, 163, ${opacity * 0.3})`)
        haloGradient.addColorStop(1, 'rgba(22, 182, 163, 0)')

        ctx.beginPath()
        ctx.arc(centerX, centerY, globeRadius * (1.2 + layer * 0.2), 0, Math.PI * 2)
        ctx.fillStyle = haloGradient
        ctx.fill()
      })

      // Draw connections with data flow effect
      connections.forEach(connection => {
        const p1 = projectedPoints[connection.p1]
        const p2 = projectedPoints[connection.p2]

        // Only draw if both points are in front
        if (p1.z > -globeRadius * 0.3 && p2.z > -globeRadius * 0.3) {
          const baseOpacity = Math.min(1, (p1.z + globeRadius) / (globeRadius * 1.5)) * 0.25

          // Create gradient for connection
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
          const dataFlow = Math.sin(time * 3 + connection.dataPhase) * 0.5 + 0.5

          gradient.addColorStop(0, `rgba(22, 182, 163, ${baseOpacity * 0.5})`)
          gradient.addColorStop(dataFlow * 0.3 + 0.2, `rgba(22, 182, 163, ${baseOpacity})`)
          gradient.addColorStop(dataFlow * 0.6 + 0.4, `rgba(250, 243, 236, ${baseOpacity * 0.8})`)
          gradient.addColorStop(1, `rgba(22, 182, 163, ${baseOpacity * 0.5})`)

          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.2 * p1.scale
          ctx.lineCap = 'round'
          ctx.stroke()

          // Animate data flow particles along connections
          connection.dataPhase += 0.05
          if (baseOpacity > 0.1) {
            const flowProgress = (Math.sin(connection.dataPhase) * 0.5 + 0.5)
            const flowX = p1.x + (p2.x - p1.x) * flowProgress
            const flowY = p1.y + (p2.y - p1.y) * flowProgress

            ctx.beginPath()
            ctx.arc(flowX, flowY, Math.abs(1.5 * p1.scale), 0, Math.PI * 2)
            ctx.fillStyle = `rgba(250, 243, 236, ${baseOpacity * 0.9})`
            ctx.fill()
          }
        }
      })

      // Draw main points with multi-layer glow
      projectedPoints.forEach(point => {
        // Only draw points in front
        if (point.z > -globeRadius * 0.5) {
          const opacity = Math.min(1, (point.z + globeRadius) / (globeRadius * 1.5))
          const baseRadius = Math.abs(mainPoints[point.index].size * point.scale * point.pulseScale)

          // Multi-layer glow effect
          const glowLayers = [3, 2, 1]
          glowLayers.forEach((multiplier, layer) => {
            const gradient = ctx.createRadialGradient(
              point.x, point.y, 0,
              point.x, point.y, Math.abs(baseRadius * multiplier * (1 + layer * 0.5))
            )
            const layerOpacity = opacity * (0.4 - layer * 0.1)
            gradient.addColorStop(0, `rgba(22, 182, 163, ${layerOpacity})`)
            gradient.addColorStop(0.5, `rgba(22, 182, 163, ${layerOpacity * 0.4})`)
            gradient.addColorStop(1, 'rgba(22, 182, 163, 0)')

            ctx.beginPath()
            ctx.arc(point.x, point.y, Math.abs(baseRadius * multiplier * (1 + layer * 0.5)), 0, Math.PI * 2)
            ctx.fillStyle = gradient
            ctx.fill()
          })

          // Core dot with gradient
          const coreGradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, baseRadius
          )
          coreGradient.addColorStop(0, `rgba(250, 243, 236, ${opacity})`)
          coreGradient.addColorStop(0.5, `rgba(22, 182, 163, ${opacity})`)
          coreGradient.addColorStop(1, `rgba(22, 182, 163, ${opacity * 0.5})`)

          ctx.beginPath()
          ctx.arc(point.x, point.y, baseRadius, 0, Math.PI * 2)
          ctx.fillStyle = coreGradient
          ctx.fill()
        }
      })

      // Draw and animate orbital particles
      orbitalParticles.forEach(particle => {
        particle.angle += particle.speed

        // Apply orbit tilt
        const tiltedAngle = particle.angle
        const tiltedElevation = particle.elevation + mouseX * particle.orbitTiltX + mouseY * particle.orbitTiltY

        const orbitX = Math.cos(tiltedAngle) * Math.cos(tiltedElevation) * particle.radius
        const orbitY = Math.sin(tiltedElevation) * particle.radius
        const orbitZ = Math.sin(tiltedAngle) * Math.cos(tiltedElevation) * particle.radius

        // Apply globe rotation to orbit
        const rotatedX = orbitX * cosY - orbitZ * sinY
        const rotatedZ = orbitX * sinY + orbitZ * cosY
        const rotatedY = orbitY * cosX - rotatedZ * sinX

        // Skip if particle is too far behind
        if (rotatedY < -baseGlobeRadius * 2) return

        // Project to 2D
        const scale = Math.max(0.1, 350 / (350 + rotatedY))
        const projectedX = centerX + rotatedX * scale
        const projectedY = centerY + rotatedY * scale

        const opacity = Math.max(0.2, Math.min(1, (rotatedY + baseGlobeRadius) / (baseGlobeRadius * 2)))

        // Skip if opacity is too low
        if (opacity < 0.1) return

        // Glow for orbital particle
        const glowRadius = Math.abs(particle.size * 3)
        const orbitalGlow = ctx.createRadialGradient(projectedX, projectedY, 0, projectedX, projectedY, glowRadius)
        orbitalGlow.addColorStop(0, `rgba(22, 182, 163, ${opacity * 0.6})`)
        orbitalGlow.addColorStop(1, 'rgba(22, 182, 163, 0)')

        ctx.beginPath()
        ctx.arc(projectedX, projectedY, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = orbitalGlow
        ctx.fill()

        // Core of orbital particle
        const coreRadius = Math.abs(particle.size * scale)
        ctx.beginPath()
        ctx.arc(projectedX, projectedY, coreRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(250, 243, 236, ${opacity})`
        ctx.fill()
      })

      // Draw orbital paths (subtle rings)
      const orbitRings = [1.3, 1.6, 1.9]
      orbitRings.forEach((ringRadius, index) => {
        const ringOpacity = 0.03 - index * 0.008
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, baseGlobeRadius * ringRadius, baseGlobeRadius * ringRadius * 0.3, finalRotationY, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(22, 182, 163, ${ringOpacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Draw outer boundary ring
      ctx.beginPath()
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(22, 182, 163, 0.3)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Inner radial glow
      const innerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, globeRadius * 1.1)
      innerGlow.addColorStop(0, 'rgba(22, 182, 163, 0.08)')
      innerGlow.addColorStop(0.5, 'rgba(22, 182, 163, 0.03)')
      innerGlow.addColorStop(1, 'rgba(22, 182, 163, 0)')

      ctx.beginPath()
      ctx.arc(centerX, centerY, globeRadius * 1.1, 0, Math.PI * 2)
      ctx.fillStyle = innerGlow
      ctx.fill()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  )
}

function ObjectiveCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-6 rounded-xl bg-[#F4F3EC]/5 border border-[#F4F3EC]/10 hover:border-[#16B6A3]/50 transition-all duration-300 hover:scale-105 hover:bg-[#F4F3EC]/10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'PT Sans, sans-serif' }}>{title}</h3>
      <p className="text-[#F4F3EC]/70 leading-relaxed">{description}</p>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-[#F4F3EC]/5 border border-[#F4F3EC]/10 hover:border-[#16B6A3] transition-all duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'PT Sans, sans-serif' }}>{title}</h3>
      <p className="text-[#F4F3EC]/70 leading-relaxed">{description}</p>
    </div>
  )
}

function ProcessStep({ step, icon, title, description }: { step: number; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="relative inline-block mb-6">
        <div className="w-16 h-16 rounded-full bg-[#16B6A3]/20 border-2 border-[#16B6A3] flex items-center justify-center mx-auto">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#16B6A3] flex items-center justify-center text-[#1A1E1B] font-bold">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'PT Sans, sans-serif' }}>{title}</h3>
      <p className="text-[#F4F3EC]/70 leading-relaxed">{description}</p>
    </div>
  )
}

function ImpactCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-[#F4F3EC]/5 border border-[#F4F3EC]/10 hover:border-[#16B6A3]/50 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-[#16B6A3]" style={{ fontFamily: 'PT Sans, sans-serif' }}>{title}</h3>
      <p className="text-[#F4F3EC]/80 leading-relaxed">{description}</p>
    </div>
  )
}
