---
title: "NeurIPS 2026 Oral & Workshop Paper – RealPDE Competition"
description: "Oral presentation and workshop paper at NeurIPS 2026 for a Top 3 finish in the RealPDE Competition on Scientific ML for real-world fluid dynamics."
date: 2026-10-15
featured: true
tags: ["Scientific ML"]
image: "/images/projects/realpde_vorticity.gif"
badges: ["NeurIPS 2026 Oral", "Workshop Paper", "Top 3"]
links:
  writeup: "https://realpdecompetition.github.io/"
  # github: "https://github.com/oscarbreiner"
---

**Oral presentation at NeurIPS 2026** and **co-author of the competition workshop paper**, earned by a Top 3 finish in the [RealPDE Competition](https://realpdecompetition.github.io/), the first NeurIPS Scientific ML competition built on data from real physical systems.

## Highlights

- **Oral presentation** at the NeurIPS 2026 competition workshop (Sydney, December 11, 2026), an honor reserved for the top 3 teams per track.
- **Workshop paper:** co-author of the joint paper summarizing the competition results.
- **Top 3** in the final private test set ranking.

---

The competition targets the sim-to-real gap in Scientific ML. Its dataset pairs real-world Particle Image Velocimetry (PIV) measurements of flow over a NACA4418 airfoil with matched 3D CFD simulations across a range of angles of attack and Reynolds numbers. Models are evaluated with physics-aware metrics, such as turbulent kinetic energy, mean velocity profiles, efficiency, and a Safe Prediction Score for reliability, rather than only point-wise errors.

The two tracks cover the core capabilities needed for deployable Scientific ML: **Sim-to-Real Transfer Learning**, which fuses complete simulated data with noisy, partially observed real measurements, and **Long-Term Test-Time Adaptation**, which uses autoregressive long-horizon prediction with continuous online adaptation to streaming observations.

> **Note:** The code will be open-sourced soon.
