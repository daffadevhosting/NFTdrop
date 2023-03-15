import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../buster_drone/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="BusterDronefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Drone_Controller">
                  <group name="Turbine_Controller" position={[0, -100, -5]} />
                  <group name="U_MassPoint" position={[0, 0.12, -12.91]} rotation={[1.32, 0, 0]}>
                    <group name="D_MassPoint" position={[0, 0, 77.5]}>
                      <group name="Drone_Body" position={[0, 0, -37.5]} rotation={[-Math.PI / 2, 0, 0]}>
                        <group name="Drone_Gen_R" position={[-26.78, -31.11, -0.75]} rotation={[Math.PI / 2, -1.03, Math.PI / 2]}>
                          <group name="Drone_Panel_R" position={[0.68, -0.38, 4.96]}>
                            <group name="Drone_leg_R" position={[-12.89, -9.61, -0.73]} rotation={[-1.24, 1.57, 0]}>
                              <group name="R_P1_G" position={[2.42, -4.84, -0.01]} rotation={[-Math.PI, 1.31, Math.PI]}>
                                <group name="R_P2" rotation={[1.33, 0, 0]}>
                                  <group name="R_P3_G" position={[0, -22.92, 0.03]}>
                                    <group name="R_P4" position={[0, 0, 0]} rotation={[1.29, 0, Math.PI]}>
                                      <group name="R_P5_M" position={[0.01, -11.29, 0.08]}>
                                        <group name="R_P6_G" position={[-0.01, -9.33, -0.08]}>
                                          <group name="R_P7" rotation={[1.41, 0, 0]}>
                                            <mesh name="R_P7_leg_0" geometry={nodes.R_P7_leg_0.geometry} material={materials.material} />
                                          </group>
                                          <mesh name="R_P6_G_leg_0" geometry={nodes.R_P6_G_leg_0.geometry} material={materials.material} />
                                        </group>
                                        <mesh name="R_P5_M_leg_0" geometry={nodes.R_P5_M_leg_0.geometry} material={materials.material} />
                                      </group>
                                      <mesh name="R_P4_leg_0" geometry={nodes.R_P4_leg_0.geometry} material={materials.material} />
                                    </group>
                                    <mesh name="R_P3_G_leg_0" geometry={nodes.R_P3_G_leg_0.geometry} material={materials.material} />
                                  </group>
                                  <mesh name="R_P2_leg_0" geometry={nodes.R_P2_leg_0.geometry} material={materials.material} />
                                </group>
                                <mesh name="R_P1_G_leg_0" geometry={nodes.R_P1_G_leg_0.geometry} material={materials.material} />
                              </group>
                              <mesh name="Drone_leg_R_leg_0" geometry={nodes.Drone_leg_R_leg_0.geometry} material={materials.material} />
                            </group>
                            <mesh name="Drone_Panel_R_body_0" geometry={nodes.Drone_Panel_R_body_0.geometry} material={materials.body} />
                          </group>
                          <mesh name="0" geometry={nodes['0'].geometry} material={materials.body} />
                        </group>
                        <group name="Drone_Gen_L" position={[26.78, -31.11, -0.75]} rotation={[Math.PI / 2, 1.03, -Math.PI / 2]}>
                          <group name="Drone_Panel_L" position={[-0.68, -0.38, 4.96]}>
                            <group name="Drone_leg_L" position={[12.89, -9.61, -0.73]} rotation={[-1.24, -1.57, 0]}>
                              <group name="L_P1_G" position={[-2.42, -4.84, -0.01]} rotation={[Math.PI, -1.41, Math.PI]}>
                                <group name="L_P2" rotation={[1.28, 0, 0]}>
                                  <group name="L_P3_G" position={[0, -22.92, 0.03]}>
                                    <group name="L_P4" rotation={[1.46, 0, -Math.PI]}>
                                      <group name="L_P5_M" position={[0.06, -11.24, 0.08]} rotation={[0, 0, -0.02]}>
                                        <group name="L_P6_G" position={[0.14, -9.37, -0.08]}>
                                          <group name="L_P7" position={[0.01, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                                            <mesh name="L_P7_leg_0" geometry={nodes.L_P7_leg_0.geometry} material={materials.material} />
                                          </group>
                                          <mesh name="L_P6_G_leg_0" geometry={nodes.L_P6_G_leg_0.geometry} material={materials.material} />
                                        </group>
                                        <mesh name="L_P5_M_leg_0" geometry={nodes.L_P5_M_leg_0.geometry} material={materials.material} />
                                      </group>
                                      <mesh name="L_P4_leg_0" geometry={nodes.L_P4_leg_0.geometry} material={materials.material} />
                                    </group>
                                    <mesh name="L_P3_G_leg_0" geometry={nodes.L_P3_G_leg_0.geometry} material={materials.material} />
                                  </group>
                                  <mesh name="L_P2_leg_0" geometry={nodes.L_P2_leg_0.geometry} material={materials.material} />
                                </group>
                                <mesh name="L_P1_G_leg_0" geometry={nodes.L_P1_G_leg_0.geometry} material={materials.material} />
                              </group>
                              <mesh name="Drone_leg_L_leg_0" geometry={nodes.Drone_leg_L_leg_0.geometry} material={materials.material} />
                            </group>
                            <mesh name="Drone_Panel_L_body_0" geometry={nodes.Drone_Panel_L_body_0.geometry} material={materials.body} />
                          </group>
                          <mesh name="Drone_Gen_L_body_0" geometry={nodes.Drone_Gen_L_body_0.geometry} material={materials.body} />
                        </group>
                        <group name="Drone_UPanel_R" position={[-28.35, -10.2, 0.14]} rotation={[Math.PI / 2, -1.3, Math.PI / 2]}>
                          <mesh name="Drone_UPanel_R_body_0" geometry={nodes.Drone_UPanel_R_body_0.geometry} material={materials.body} />
                        </group>
                        <group name="Drone_UPanel_L" position={[28.23, -11.23, -0.08]} rotation={[Math.PI / 2, 1.3, -Math.PI / 2]}>
                          <mesh name="Drone_UPanel_L_body_0" geometry={nodes.Drone_UPanel_L_body_0.geometry} material={materials.body} />
                        </group>
                        <group name="Drone_UPart" position={[0, 38.98, -3.07]}>
                          <mesh name="Drone_UPart_body_0" geometry={nodes.Drone_UPart_body_0.geometry} material={materials.body} />
                        </group>
                        <group name="Drone_Turb_M_L" position={[19.97, 24.56, -6.01]} rotation={[-1.68, -0.24, 1.57]}>
                          <group name="Drone_Turb_Blade_L" position={[0, -36.16, -10.97]} rotation={[-1.28, 1.07, Math.PI]}>
                            <mesh name="Drone_Turb_Blade_L_body_0" geometry={nodes.Drone_Turb_Blade_L_body_0.geometry} material={materials.body} />
                          </group>
                          <mesh name="Drone_Turb_M_L_body_0" geometry={nodes.Drone_Turb_M_L_body_0.geometry} material={materials.body} />
                        </group>
                        <group name="Drone_Turb_M_R" position={[-19.97, 24.56, -6.01]} rotation={[-1.69, 0.23, -Math.PI / 2]}>
                          <group name="Drone_Turb_Blade_R" position={[0, -36.16, -10.97]} rotation={[-1.28, -1.07, Math.PI]}>
                            <mesh name="Drone_Turb_Blade_R_body_0" geometry={nodes.Drone_Turb_Blade_R_body_0.geometry} material={materials.body} />
                          </group>
                          <mesh name="Drone_Turb_M_R_body_0" geometry={nodes.Drone_Turb_M_R_body_0.geometry} material={materials.body} />
                        </group>
                        <group name="Drone_leg_F" position={[0, -38.68, 20.01]}>
                          <group name="F_P1_G" position={[0.01, -5.51, -0.09]} rotation={[0, Math.PI / 2, 0]}>
                            <group name="F_P2" rotation={[Math.PI / 2, 0.09, -Math.PI / 2]}>
                              <group name="F_P3_G" position={[0, -22.92, 0.03]}>
                                <group name="F_P4" rotation={[1.22, 0, Math.PI]}>
                                  <group name="F_P5_M" position={[-0.02, -11.28, 0.08]}>
                                    <group name="F_P6_G" position={[0.01, -9.33, -0.08]}>
                                      <group name="F_P7" rotation={[1.26, 0, 0]}>
                                        <mesh name="F_P7_leg_0" geometry={nodes.F_P7_leg_0.geometry} material={materials.material} />
                                      </group>
                                      <mesh name="F_P6_G_leg_0" geometry={nodes.F_P6_G_leg_0.geometry} material={materials.material} />
                                    </group>
                                    <mesh name="F_P5_M_leg_0" geometry={nodes.F_P5_M_leg_0.geometry} material={materials.material} />
                                  </group>
                                  <mesh name="F_P4_leg_0" geometry={nodes.F_P4_leg_0.geometry} material={materials.material} />
                                </group>
                                <mesh name="F_P3_G_leg_0" geometry={nodes.F_P3_G_leg_0.geometry} material={materials.material} />
                              </group>
                              <mesh name="F_P2_leg_0" geometry={nodes.F_P2_leg_0.geometry} material={materials.material} />
                            </group>
                            <mesh name="F_P1_G_leg_0" geometry={nodes.F_P1_G_leg_0.geometry} material={materials.material} />
                          </group>
                          <mesh name="Drone_leg_F_leg_0" geometry={nodes.Drone_leg_F_leg_0.geometry} material={materials.material} />
                        </group>
                        <group name="Drone_ILens" position={[0, -14.97, 41.51]}>
                          <group name="Drone_IEye" position={[0, -0.02, -8.91]} rotation={[3.12, 0.12, -3.14]}>
                            <mesh name="1" geometry={nodes['1'].geometry} material={materials.body} morphTargetDictionary={nodes['1'].morphTargetDictionary} morphTargetInfluences={nodes['1'].morphTargetInfluences} />
                          </group>
                          <mesh name="Drone_ILens_body_0" geometry={nodes.Drone_ILens_body_0.geometry} material={materials.body} />
                        </group>
                        <mesh name="Drone_Body_body_0" geometry={nodes.Drone_Body_body_0.geometry} material={materials.body} />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Env">
                  <group name="Scheibe" position={[0, -99, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                    <mesh name="Scheibe_Boden_0" geometry={nodes.Scheibe_Boden_0.geometry} material={materials.Boden} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../buster_drone/scene-transformed.glb')
