class Clock
  MINUTES_IN_DAY = 60 * 24

  attr_accessor :total_minutes

  def self.at(hours, minutes = 0)
    new(hours, minutes)
  end

  def initialize(hours, minutes)
    hours *= 60
    @total_minutes = hours + minutes
  end

  def +(other)
    self.total_minutes += other
    self.total_minutes -= MINUTES_IN_DAY if total_minutes >= MINUTES_IN_DAY
    self
  end

  def -(other)
    self.total_minutes -= other
    self.total_minutes += MINUTES_IN_DAY if total_minutes < 0
    self
  end

  def to_s
    hours = hours_minutes[0]
    minutes = hours_minutes[1]
    "#{format('%02d', hours)}:#{format('%02d', minutes)}"
  end

  def ==(other)
    total_minutes == other.total_minutes
  end

  private

  def hours_minutes
    total_minutes.divmod(60)
  end
end
