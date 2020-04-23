# use-of-context--134
s

Updating things directly to context and then using them from there.Cannot be done if used apis.becuase need to track the updated context value and then call the apis. Better do it with local state and just use context to pass the values to the other components in Routing (case where component is displayed at once).

  Multiple components linked with context are used in one view then better completely depend on Context. So, maintain consistency in the view for updations.
