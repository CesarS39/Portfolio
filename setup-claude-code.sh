#!/bin/bash
# Setup completo de Claude Code para el rediseño del portafolio
# Ejecutar desde la raíz del proyecto: bash setup-claude-code.sh

echo "🚀 Configurando Claude Code para el portafolio..."

# 1. Crear estructura de directorios .claude
mkdir -p .claude/skills/frontend-design
mkdir -p .claude/agents

echo "📁 Directorios creados"

# 2. Descargar el skill oficial de frontend-design de Anthropic
curl -s -o .claude/skills/frontend-design/SKILL.md \
  https://raw.githubusercontent.com/anthropics/claude-code/main/plugins/frontend-design/skills/frontend-design/SKILL.md

echo "🎨 Skill frontend-design instalado"

# 3. Crear settings.json con el hook de build automático
cat > .claude/settings.json << 'EOF'
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "cd $(git rev-parse --show-toplevel) && npm run build 2>&1 | tail -5"
          }
        ]
      }
    ]
  }
}
EOF

echo "⚡ Hook de build configurado"

# 4. Instalar dependencias de Three.js y animaciones
echo "📦 Instalando dependencias de animaciones..."
npm install three @react-three/fiber @react-three/drei gsap

echo ""
echo "✅ Setup completo. Ahora:"
echo "   1. Coloca el CLAUDE.md en la raíz del proyecto (si no lo has hecho)"
echo "   2. Abre Claude Code: claude"
echo "   3. Primer prompt sugerido abajo 👇"
echo ""
echo "💬 Primer prompt para Claude Code:"
echo "────────────────────────────────────────"
echo "Lee el CLAUDE.md completo y empieza el rediseño."
echo "Primero define los tokens de diseño globales en tailwind.config.mjs"
echo "y en Layout.astro (variables CSS, fuentes de Google, cursor personalizado)."
echo "Luego crea el componente src/components/3d/HeroScene.jsx con una escena"
echo "Three.js minimalista: geometría que reacciona al mouse, fondo oscuro #080808,"
echo "partículas o wireframe sutil. Integra en ParallaxHero.astro con client:load."
echo "────────────────────────────────────────"