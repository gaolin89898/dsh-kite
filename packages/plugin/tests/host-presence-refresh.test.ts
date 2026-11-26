import { describe, expect, it } from 'vitest'
import {
  HOST_PRESENCE_NOTICE_MS,
  HOST_PRESENCE_POLL_INTERVAL_MS,
  sameDeviceList,
} from '../src/client/workspaces.js'
import type { RemoteDevice } from '../src/client/types.js'

function host(overrides: Partial<RemoteDevice> = {}): RemoteDevice {
  return {
    deviceId: 'server',
    name: '服务器',
    platform: 'linux',
    online: true,
    clientVersion: '1.0.6',
    harnessVersion: '0.2.3-alpha.2',
    ...overrides,
  }
}

describe('workbench Host presence polling', () => {
  it('keeps the answered list while every rendered field is unchanged', () => {
    expect(sameDeviceList([host(), host({ deviceId: 'home', platform: 'win32', online: false })], [
      host(),
      host({ deviceId: 'home', platform: 'win32', online: false }),
    ])).toBe(true)
  })

  it('reports a Host that reconnected after a restart', () => {
    expect(sameDeviceList([host({ online: false })], [host({ online: true })])).toBe(false)
  })

  it('reports a Host that dropped while the page stayed open', () => {
    expect(sameDeviceList([host()], [host({ online: false })])).toBe(false)
  })

  it('reports device, plugin and Harness metadata changes', () => {
    expect(sameDeviceList([host()], [host({ deviceId: 'other' })])).toBe(false)
    expect(sameDeviceList([host()], [host({ name: '家里' })])).toBe(false)
    expect(sameDeviceList([host()], [host({ platform: 'win32' })])).toBe(false)
    expect(sameDeviceList([host()], [host({ clientVersion: '1.0.7' })])).toBe(false)
    expect(sameDeviceList([host()], [host({ harnessVersion: '0.2.3-alpha.3' })])).toBe(false)
    expect(sameDeviceList([host()], [host({ clientVersion: undefined, harnessVersion: undefined })])).toBe(false)
  })

  it('reports added and removed Hosts', () => {
    expect(sameDeviceList([host()], [host(), host({ deviceId: 'home' })])).toBe(false)
    expect(sameDeviceList([host(), host({ deviceId: 'home' })], [host()])).toBe(false)
  })

  it('polls faster than the notice it raises disappears', () => {
    expect(HOST_PRESENCE_POLL_INTERVAL_MS).toBeLessThanOrEqual(5_000)
    expect(HOST_PRESENCE_NOTICE_MS).toBeGreaterThan(HOST_PRESENCE_POLL_INTERVAL_MS)
  })
})
