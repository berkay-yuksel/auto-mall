"use client";

import { useEffect, useRef, useState } from "react";

const scenes = {
  corridor1: {
    title: "Koridor 1",
    panorama: "/panoramas/corridor-1.jpg",

    hotSpots: [
      {
        pitch: 0,
        yaw: 85,
        sceneId: "corridor2",
        label: "Koridor 2",
        color: "green",
      },
      {
        pitch: -10,
        yaw: -70,
        sceneId: "room1",
        label: "Oda 1",
        color: "blue",
      },
    ],
  },

  corridor2: {
    title: "Koridor 2",
    panorama: "/panoramas/corridor-2.jpg",

    hotSpots: [
      {
        pitch: -5,
        yaw: 255,
        sceneId: "corridor1",
        label: "Koridor 1",
        color: "green",
      },
        {
        pitch: -10,
        yaw: -75,
        sceneId: "room2",
        label: "Oda 2",
        color: "purple",
      },
      {
        pitch: -13,
        yaw: -35,
        sceneId: "room3",
        label: "Oda 3",
        color: "blue",
      },
  
      {
        pitch: -10,
        yaw: 80,
        sceneId: "room4",
        label: "Oda 4",
        color: "orange",
      },
    ],
  },

  room1: {
    title: "Oda 1",
    panorama: "/panoramas/room-1.jpg",

    hotSpots: [
      {
        pitch: -10,
        yaw: -20,
        sceneId: "corridor1",
        label: "Koridor 1",
        color: "green",
      },
    ],
  },

  room2: {
    title: "Oda 2",
    panorama: "/panoramas/room-2.jpg",

    hotSpots: [
      {
        pitch: 0,
        yaw: 120,
        sceneId: "corridor2",
        label: "Koridor 2",
        color: "green",
      },
    ],
  },

  room3: {
    title: "Oda 3",
    panorama: "/panoramas/room-3.jpg",

    hotSpots: [
      {
        pitch: 0,
        yaw: 160,
        sceneId: "corridor2",
        label: "Koridor 2",
        color: "green",
      },
    ],
  },

  room4: {
    title: "Oda 4",
    panorama: "/panoramas/room-4.jpg",

    hotSpots: [
      {
        pitch: 0,
        yaw: 200,
        sceneId: "corridor2",
        label: "Koridor 2",
        color: "green",
      },
    ],
  },
};

export default function TourPage() {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);
  const scriptRef = useRef(null);

  const [currentScene, setCurrentScene] =
    useState("corridor1");

  useEffect(() => {
    let cancelled = false;

    const container = viewerRef.current;

    if (!container) {
      return;
    }

    if (viewerInstance.current) {
      try {
        viewerInstance.current.destroy();
      } catch (error) {
        console.warn(error);
      }

      viewerInstance.current = null;
    }

    container.innerHTML = "";

    const createHotspot = (hotSpotDiv, args) => {
      hotSpotDiv.classList.add("custom-hotspot");

      hotSpotDiv.innerHTML = "";

      const circle = document.createElement("div");

      circle.className =
        `hotspot-circle hotspot-${args.color}`;

      const label = document.createElement("div");

      label.className = "hotspot-label";

      label.textContent = args.label;

      circle.appendChild(label);

      hotSpotDiv.appendChild(circle);
    };

    const loadPannellum = () => {
      if (cancelled) {
        return;
      }

      if (!window.pannellum) {
        console.error("Pannellum bulunamadı.");
        return;
      }

      container.innerHTML = "";

      const pannellumScenes = {};

      Object.entries(scenes).forEach(
        ([sceneId, scene]) => {
          pannellumScenes[sceneId] = {
            title: scene.title,

            type: "equirectangular",

            panorama: scene.panorama,

            hotSpots: scene.hotSpots.map(
              (hotSpot) => ({
                pitch: hotSpot.pitch,

                yaw: hotSpot.yaw,

                type: "scene",

                sceneId: hotSpot.sceneId,

                createTooltipFunc:
                  createHotspot,

                createTooltipArgs: {
                  label: hotSpot.label,
                  color: hotSpot.color,
                },
              })
            ),
          };
        }
      );

      const viewer =
        window.pannellum.viewer(
          container,
          {
            default: {
              firstScene: "corridor1",

              sceneFadeDuration: 800,
            },

            autoLoad: true,

            showControls: true,

            compass: false,

            hfov: 90,

            scenes: pannellumScenes,
          }
        );

      viewerInstance.current = viewer;

      viewer.on(
        "scenechange",
        (sceneId) => {
          setCurrentScene(sceneId);
        }
      );
    };

    if (window.pannellum) {
      loadPannellum();

      return () => {
        cancelled = true;

        if (viewerInstance.current) {
          try {
            viewerInstance.current.destroy();
          } catch (error) {
            console.warn(error);
          }

          viewerInstance.current = null;
        }

        container.innerHTML = "";
      };
    }

    const script =
      document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/pannellum@2.5.7/build/pannellum.js";

    script.async = true;

    script.onload = () => {
      if (!cancelled) {
        loadPannellum();
      }
    };

    script.onerror = () => {
      console.error(
        "Pannellum script yüklenemedi."
      );
    };

    scriptRef.current = script;

    document.body.appendChild(script);

    return () => {
      cancelled = true;

      if (viewerInstance.current) {
        try {
          viewerInstance.current.destroy();
        } catch (error) {
          console.warn(error);
        }

        viewerInstance.current = null;
      }

      container.innerHTML = "";

      if (scriptRef.current) {
        scriptRef.current.remove();

        scriptRef.current = null;
      }
    };
  }, []);

  const current = scenes[currentScene];

  const goToScene = (sceneId) => {
    if (!viewerInstance.current) {
      return;
    }

    viewerInstance.current.loadScene(
      sceneId
    );
  };

  return (
    <main className="tour">
      
      <div
        ref={viewerRef}
        className="viewer"
      />

      <div className="bottom-panel">
        <div className="current-location">
          <span className="location-dot" />

          <span>
            {current.title}
          </span>
        </div>

        <div className="destinations">
          {current.hotSpots.map(
            (hotSpot) => (
              <button
                key={hotSpot.sceneId}
                className="destination"
                onClick={() =>
                  goToScene(
                    hotSpot.sceneId
                  )
                }
              >
                <span
                  className={
                    `destination-color ${hotSpot.color}`
                  }
                />

                <span>
                  {hotSpot.label}
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </main>
  );
}